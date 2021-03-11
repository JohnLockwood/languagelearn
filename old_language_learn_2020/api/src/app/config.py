"""Config
This can be merged into Flask's app.config, or used as is.
The goal is to load the environment into an easy to use object, and allow asserting
on the configuration independently of Flask
"""
import os


class Config:
    db_user = os.getenv("POSTGRES_USER")
    db_password = os.getenv("POSTGRES_PASSWORD")
    db_host = os.getenv("POSTGRES_HOST", "localhost")
    db_database = os.getenv("POSTGRES_DB")
    secret_key = bytes(os.getenv("SECRET_KEY"), "utf-8").decode('unicode_escape')