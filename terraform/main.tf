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

data "aws_caller_identity" "current" {}

data "aws_ssm_parameter" "db_user" {
  name = "/curso_en_ingles/dev_prod/db_user"
}

data "aws_ssm_parameter" "db_password" {
  name = "/curso_en_ingles/dev_prod/db_password"
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}


output "ip_address" {
  value = aws_instance.curso_en_ingles.public_ip
}

resource "aws_key_pair" "curso_en_ingles" {
  key_name   = "NorthernVirginiaMyEC2KeyPairManaged"
  public_key = file("../secret/NorthernVirginiaMyEC2KeyPair.pub")
}

# TODO Create security group in stack.
resource "aws_network_interface_sg_attachment" "sg_attachment" {
  security_group_id    = "sg-09595b1cce392f53f"
  network_interface_id = aws_instance.curso_en_ingles.primary_network_interface_id
}


resource "aws_iam_instance_profile" "curso_en_ingles" {
  name = "curso_en_ingles"
  role = aws_iam_role.curso_en_ingles.name
}

data "aws_iam_policy_document" "instance-assume-role-policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ec2.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "curso_en_ingles" {
  name = "curso_en_ingles"
  path = "/"
  assume_role_policy = data.aws_iam_policy_document.instance_assume_role_policy.json
  managed_policy_arns = [
    aws_iam_policy.get_parameters.arn, 
    aws_iam_policy.code_deploy.arn
    ]

}

resource "aws_iam_policy" "get_parameters" {
  name = "policy-381999"
  policy = jsonencode({
      Version = "2012-10-17",
      Statement = [
        {
          "Effect": "Allow",
            "Action": [
                "ssm:PutParameter",
                "ssm:DeleteParameter",
                "ssm:GetParameterHistory",
                "ssm:GetParametersByPath",
                "ssm:GetParameters",
                "ssm:GetParameter",
                "ssm:DeleteParameters"
            ],
            # 3.239.187.8
            # 363498436337
            "Resource": "*"
        }        
      ]
    })
}


resource "aws_iam_policy" "code_deploy" {
  name = "policy-381100"
  policy = jsonencode({
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:Get*",
        "s3:List*"
      ],
      "Resource": [
        "*"
        # "arn:aws:s3:::aws-codedeploy-us-east-2/*",
        # "arn:aws:s3:::aws-codedeploy-us-east-1/*",
        # "arn:aws:s3:::aws-codedeploy-us-west-1/*",
        # "arn:aws:s3:::aws-codedeploy-us-west-2/*",
        # "arn:aws:s3:::aws-codedeploy-ca-central-1/*",
        # "arn:aws:s3:::aws-codedeploy-eu-west-1/*",
        # "arn:aws:s3:::aws-codedeploy-eu-west-2/*",
        # "arn:aws:s3:::aws-codedeploy-eu-west-3/*",
        # "arn:aws:s3:::aws-codedeploy-eu-central-1/*",
        # "arn:aws:s3:::aws-codedeploy-ap-east-1/*",
        # "arn:aws:s3:::aws-codedeploy-ap-northeast-1/*",
        # "arn:aws:s3:::aws-codedeploy-ap-northeast-2/*",
        # "arn:aws:s3:::aws-codedeploy-ap-southeast-1/*",        
        # "arn:aws:s3:::aws-codedeploy-ap-southeast-2/*",
        # "arn:aws:s3:::aws-codedeploy-ap-south-1/*",
        # "arn:aws:s3:::aws-codedeploy-sa-east-1/*"
      ]}
  ]})
  }


data "aws_iam_policy_document" "instance_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ec2.amazonaws.com"]
    }
  }
}



resource "aws_instance" "curso_en_ingles" {
  depends_on =  [
    aws_key_pair.curso_en_ingles
  ]

  iam_instance_profile = aws_iam_instance_profile.curso_en_ingles.id

  user_data = <<EOF
  #! /bin/bash
  sudo yum update
  sudo yum install -y ruby
  sudo yum install -y wget
  sudo yum install -y jq
  cd /home/ec2-user
  wget https://aws-codedeploy-us-east-1.s3.us-east-1.amazonaws.com/latest/install
  chmod +x ./install
  sudo ./install auto  
  mkdir -p .aws
  echo [default] > .aws/config
  echo region = us-east-1 >> .aws/config
  sudo chown -R  ec2-user:ec2-user .aws
  EOF

  ami = "ami-0aeeebd8d2ab47354"

  key_name = "${aws_key_pair.curso_en_ingles.key_name}"
  instance_type = "t2.micro"  
  tags = {
    Name = "CursoEnIngles"
  }
}


# output "endpoint" {
#   value = aws_db_instance.llearn_db.endpoint
# }

# WARNING
# TODO:
# This leaks user/password to state.  
resource "aws_db_instance" "llearn_db" {
  # count                = 0
  allocated_storage    = 10
  engine               = "postgres"
  engine_version       = "13.2"
  instance_class       = "db.t3.micro"
  name                 = "llearn_db"
  username             = data.aws_ssm_parameter.db_user.value
  password             = data.aws_ssm_parameter.db_password.value
  skip_final_snapshot  = true             # For dev only -- should be false later
}