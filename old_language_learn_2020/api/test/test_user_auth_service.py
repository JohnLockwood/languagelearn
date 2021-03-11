from service.service import UserAuthService
from app.config import Config


def test_can_encode_jwt():
    user_id = "roscoe@gmail.com"
    token = UserAuthService.encode_token(user_id)
    assert token is not None


def test_can_encode_and_decode_jwt():
    user_id = "roscoe@gmail.com"
    token = UserAuthService.encode_token(user_id)
    assert token is not None

    decoded = UserAuthService.decode_jwt(token)
    assert decoded["sub"] == user_id


def test_using_512_bit_key():
    assert len(Config.secret_key) == int(512/8)