import os
from flask import Flask

app = Flask(__name__)

port = os.environ["PORT"]
debug = os.getenv("DEBUG", False)

@app.route("/")
def hello_world():
    return "<p>Hello, World, debugging, sweet!</p>"

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=debug, port=port)