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
echo "${db_host}" > /tmp/db_host
echo [default] > .aws/config
echo region = us-east-1 >> .aws/config
sudo chown -R  ec2-user:ec2-user .aws
