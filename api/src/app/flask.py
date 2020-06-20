from app.auth.views import auth_blueprint
from .config import Config
from flask import Flask

app = Flask(__name__)

app.register_blueprint(auth_blueprint)

app.config = { **app.config, **Config.__dict__}

@app.route("/")
def index():
    return "OK -- see also /health"

@app.route("/health")
def health_check():
    return "I'm doing fine, thanks, but you really should test the database here or do other armwaving"

