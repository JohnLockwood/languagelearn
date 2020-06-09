from service.db import Session, connection_string
from service.model import User


def test_can_get_session():
    session = Session()
    assert session is not None

#
# def test_db_string_is_reasonable():
#     print(connection_string)


def test_can_save_user():
    session = Session()
    email = 'johndoe@gmail.com'
    u = User()
    u.email = email
    u.password = 'secret'
    session.add(u)
    session.commit()

    session = Session()
    q = session.query(User).filter(User.email == email)
    u2 = q.scalar()
    assert u2 is not None
    session.delete(u2)
    session.commit()
