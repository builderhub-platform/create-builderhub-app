provider "aws" {
  region = "ap-northeast-2"
}
data "terraform_remote_state" "builderhub-api" {
  backend   = "s3"
  workspace = "dev"

  config = {
    bucket  = "builderhub-terraform-running-state"
    key     = "global/s3/terraform.tfstate"
    region  = "ap-northeast-2"
    encrypt = true
  }
}

output "builderhub-api-gateway" {
  value = data.terraform_remote_state.builderhub-api.outputs.api_gateway
  # value = data.terraform_remote_state.builderhub-api
}
