
import pytest

from app import flask

HTTP_OK = 200

@pytest.fixture
def client():

    flask.app.config['TESTING'] = True

    with flask.app.test_client() as client:
        yield client


def test_index_route(client):
    resp = client.get("/")
    assert resp.status_code == HTTP_OK


def test_health_rout(client):
    resp = client.get("/health")
    assert resp.status_code == HTTP_OK
