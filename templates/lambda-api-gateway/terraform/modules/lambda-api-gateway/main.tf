data "archive_file" "function_archive" {
  type        = "zip"
  source_dir  = "${path.module}/../lambda/dist"
  output_path = "${path.module}/../lambda/dist/function.zip"
}

resource "aws_lambda_layer_version" "dependency_layer" {
  filename            = "${path.module}/../dist/layers/layers.zip"
  layer_name          = "dependency_layer"
  compatible_runtimes = ["nodejs16.x"]
  source_code_hash    = filebase64sha256("${path.module}/../dist/layers/layers.zip")
}

resource "aws_lambda_function" "lambda" {
  filename      = data.archive_file.function_archive.output_path
  function_name = local.name
  role          = aws_iam_role.lambda_exec.arn
  handler       = "index.handler"
  layers        = [aws_lambda_layer_version.dependency_layer.arn]

  # Lambda Runtimes can be found here: https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html
  runtime     = "nodejs16.x"
  timeout     = "30"
  memory_size = local.lambda_memory

  source_code_hash = data.archive_file.function_archive.output_base64sha256

  environment {
    variables = {
      "FORGE_CLIENT_ID"     = "${var.FORGE_CLIENT_ID}"
      "FORGE_CLIENT_SECRET" = "${var.FORGE_CLIENT_SECRET}"
    }
  }
}

resource "aws_iam_role" "lambda_exec" {
  name = "${local.name}_serverless_lambda"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Sid    = ""
      Principal = {
        Service = "lambda.amazonaws.com"
      }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_policy" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

## API Gateway

resource "aws_apigatewayv2_integration" "api_gateway_rest_api" {
  api_id = var.api-gateway.id

  integration_uri    = aws_lambda_function.lambda.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "endpoint" {
  api_id = var.api-gateway.id

  route_key = "${local.method} /${local.endpoint}"
  target    = "integrations/${var.api-gateway.id}"
}

resource "aws_lambda_permission" "permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${var.api-gateway.execution_arn}/*/*"
}
