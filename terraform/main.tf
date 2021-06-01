terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

variable db_password {
    type = string
    default = "UNSET"
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}

output "variable_dump" {
  value = var.db_password
}