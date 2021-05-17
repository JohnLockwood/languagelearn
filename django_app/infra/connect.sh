# Assumes you've run docker-compose up -d 
docker exec -it  my_postgres psql -h localhost -U "${POSTGRES_USER}" -d "${POSTGRES_DB}"