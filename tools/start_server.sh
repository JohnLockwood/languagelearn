#!/bin/bash
if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root" 
   exit 1
fi
export AWS_DEFAULT_REGION=us-east-1
export POSTGRES_USER=$(aws ssm get-parameter --name /curso_en_ingles/dev_prod/db_user --with-decrypt | jq -r ".Parameter.Value")
export POSTGRES_PASSWORD=$(aws ssm get-parameter --name /curso_en_ingles/dev_prod/db_password --with-decrypt | jq -r ".Parameter.Value")
export POSTGRES_DB=llearn_db

export POSTGRES_HOST=$(cat /tmp/db_host)
# echo "POSTGRES_DB   : $POSTGRES_DB"
#echo "POSTGRES_USER : $POSTGRES_USER"
#echo "POSTGRES_HOST : $POSTGRES_HOST"
#echo "Starting server (not really) HELLO WORLD"
cd /app/app
export DJANGO_SETTINGS_MODULE=django_app.settings
pip3 install -t "." -r requirements.txt
python3 -m django migrate
python3 manage.py collectstatic
python3 -m gunicorn -b 0.0.0.0:80  django_app.wsgi & 



