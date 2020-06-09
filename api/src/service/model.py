from sqlalchemy import Column, Integer, String
from .db import Base, engine


class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    password = Column(String)


Base.metadata.create_all(engine)
