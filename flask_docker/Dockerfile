FROM python:3.9-slim

WORKDIR /app
ENV PORT 80
ENV FLASK_APP=app
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
EXPOSE $PORT

COPY . .

ENTRYPOINT python3 app.py
#CMD [ "python3", "-m" , "flask", "run", "-p", $PORT, "--host=0.0.0.0"]