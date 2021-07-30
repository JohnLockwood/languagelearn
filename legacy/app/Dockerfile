
FROM python:3.9-slim 

# set up the psycopg2
# set up the psycopg2
#RUN apt-get update && apt-get install -y libpq-dev \
#     gcc \
#     postgresql-client
#
#RUN pip install psycopg2==2.8.3
#RUN apt-get autoremove -y gcc
# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt /app/requirements.txt
RUN chmod +x /app/requirements.txt
RUN pip install -r requirements.txt

# copy project
COPY . /app/
RUN chmod +x /app/docker-entrypoint.sh

ENTRYPOINT [ "/app/docker-entrypoint.sh" ]