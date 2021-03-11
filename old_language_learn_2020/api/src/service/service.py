import jwt
from app.config import Config
import datetime


class UserAuthService:

    # TODO: Expiration time best practice?  Should it be part of interface?
    @staticmethod
    def encode_token(user_id):
        final_payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=7, seconds=0),
            'iat': datetime.datetime.utcnow(),
            'sub': user_id
        }
        return jwt.encode(final_payload, Config.secret_key, algorithm='HS256')

    @staticmethod
    def decode_jwt(token):
        return jwt.decode(token, Config.secret_key)