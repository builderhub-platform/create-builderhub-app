locals {
  name          = "{{name}}"
  author        = "{{author}}"
  method        = "{{method}}"
  endpoint      = "{{endpoint}}"
  lambda_memory = 128

  tags = {
    Name      = "{{name}}"
    ManagedBy = "Terraform"
  }
}
