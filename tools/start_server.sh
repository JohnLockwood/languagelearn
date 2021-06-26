export POSTGRES_USER=$(aws ssm get-parameter --name /curso_en_ingles/dev_prod/db_user --with-decrypt | jq -r ".Parameter.Value")
export POSTGRES_PASSWORD=$(aws ssm get-parameter --name /curso_en_ingles/dev_prod/db_password --with-decrypt | jq -r ".Parameter.Value")
export POSTGRES_DB=llearn_db
export POSTGRES_HOST="terraform-20210626221425423200000001.cvzppx261icn.us-east-1.rds.amazonaws.com"
# echo "POSTGRES_DB   : $POSTGRES_DB"
#echo "POSTGRES_USER : $POSTGRES_USER"
#echo "POSTGRES_HOST : $POSTGRES_HOST"
#echo "Starting server (not really) HELLO WORLD"
cd /app/app
export DJANGO_SETTINGS_MODULE=django_app.settings
sudo pip3 install requirements.txt
sudo python3 -m django migrate
sudo -E python3 -m django runserver 0.0.0.0:80


