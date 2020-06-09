import os
from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

csf = "postgres://{user}:{password}@{host}/{database}"
connection_string = csf.format(user=os.getenv("POSTGRES_USER"), password=os.getenv("POSTGRES_PASSWORD"),
                               host=os.getenv("POSTGRES_HOST", "localhost"), database=os.getenv("POSTGRES_DB"))
engine = create_engine(connection_string)
Session = sessionmaker(bind=engine)
Base = declarative_base()


