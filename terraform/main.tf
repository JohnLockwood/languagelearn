# For more configuration ideas see
# https://dev.to/rolfstreefkerk/how-to-setup-a-basic-vpc-with-ec2-and-rds-using-terraform-3jij
# We have RDS but need VPC

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
}

variable db_user {
    type = string
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}

output "variable_dump_password" {
  value = var.db_password
}

output "variable_dump_user" {
  value = var.db_user
}

output "endpoint" {
  value = aws_db_instance.llearn_db.endpoint
}

resource "aws_db_instance" "llearn_db" {
  allocated_storage    = 10
  engine               = "postgres"
  engine_version       = "13.2"
  instance_class       = "db.t3.micro"
  name                 = "llearn_db"
  username             = var.db_user
  password             = var.db_password
  skip_final_snapshot  = true             # For dev only -- should be false later
}