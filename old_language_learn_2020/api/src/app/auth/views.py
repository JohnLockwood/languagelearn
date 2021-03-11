from flask import Blueprint, request, make_response, jsonify
from flask.views import MethodView

from service import db
from service.model import User

auth_blueprint = Blueprint('auth', __name__)
