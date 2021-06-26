export POSTGRES_USER=$(aws ssm get-parameter --name /curso_en_ingles/dev_prod/db_user --with-decrypt | jq ".Parameter.Value")
export POSTGRES_PASSWORD=$(aws ssm get-parameter --name /curso_en_ingles/dev_prod/db_password --with-decrypt | jq ".Parameter.Value")
export POSTGRES_DB=llearn_db
export POSTGRES_HOST=algo

echo "POSTGRES_DB=$POSTGRES_DB, POSTGRES_USER=$POSTGRES_USER"

#   'NAME': os.environ['POSTGRES_DB'],
#      'USER': os.environ['POSTGRES_USER'],
#      'PASSWORD': os.environ['POSTGRES_PASSWORD'],
      'HOST': os.environ['POSTGRES_HOST'],

echo "Starting server (not really) HELLO WORLD"