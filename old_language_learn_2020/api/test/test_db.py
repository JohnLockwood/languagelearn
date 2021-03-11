from service.db import Session, connection_string
from service.model import User
from pytest import fixture

TEST_USER1 = User(email='johndoe@gmail.com', password='DoubleSecretProbation')


def clone_test_user():
    return User(email=TEST_USER1.email, password=TEST_USER1.password)


@fixture()
def delete_test_user():
    session = Session()

    q = session.query(User).filter(User.email == TEST_USER1.email)
    u = q.scalar()
    if u is not None:
        session.delete(u)
    session.commit()


def test_can_get_session(delete_test_user):
    session = Session()
    assert session is not None


def test_can_save_user():
    session = Session()

    u = clone_test_user()
    session.add(u)
    session.commit()

    session = Session()
    q = session.query(User).filter(User.email == TEST_USER1.email)
    u2 = q.scalar()
    assert u2 is not None
    session.delete(u2)
    session.commit()
