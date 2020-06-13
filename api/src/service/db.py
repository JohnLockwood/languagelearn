import os
from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import sessionmaker
from app.config import Config
from sqlalchemy.ext.declarative import declarative_base

csf = "postgres://{user}:{password}@{host}/{database}"
connection_string = f"postgres://{Config.db_user}:{Config.db_password}@{Config.db_host}/{Config.db_database}"

engine = create_engine(connection_string)
Session = sessionmaker(bind=engine)
Base = declarative_base()


