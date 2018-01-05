from flask import Flask
import Routes

app = Flask(__name__)


@app.route('/')
def hello():
    return Routes.hello()


if __name__ == '__main__':
    app.run()
