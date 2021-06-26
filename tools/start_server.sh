export POSTGRES_USER=$(aws ssm get-parameter --name /curso_en_ingles/dev_prod/db_user --with-decrypt | jq ".Parameter.Value")
export POSTGRES_PASSWORD=$(aws ssm get-parameter --name /curso_en_ingles/dev_prod/db_password --with-decrypt | jq ".Parameter.Value")
export POSTGRES_DB=llearn_db
export POSTGRES_HOST="terraform-20210626221425423200000001.cvzppx261icn.us-east-1.rds.amazonaws.com"
echo "POSTGRES_DB=$POSTGRES_DB, POSTGRES_USER=$POSTGRES_USER POSTGRES_HOST=$POSTGRES_HOST"

#   'NAME': os.environ['POSTGRES_DB'],
#      'USER': os.environ['POSTGRES_USER'],
#      'PASSWORD': os.environ['POSTGRES_PASSWORD'],
      'HOST': os.environ['POSTGRES_HOST'],

echo "Starting server (not really) HELLO WORLD"