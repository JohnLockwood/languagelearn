from sqlalchemy import Column, String
from sqlalchemy.dialects.postgresql import UUID
from .db import Base, engine
import uuid


class User(Base):
    __tablename__ = 'app_user'

    # id = Column(Integer, primary_key=True)
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
    email = Column(String, unique=True)
    password = Column(String)


Base.metadata.create_all(engine)
