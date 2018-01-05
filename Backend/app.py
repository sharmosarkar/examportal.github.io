from flask import Flask, request
from flask_cors import CORS
import Routes

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "It works!"

@app.route('/auth', methods=['GET', 'POST'])
def authenticate():
    req_data = request.get_json()
    print req_data
    username = req_data['username']
    password = req_data['password']
    print username, password
    return Routes.auth(username, password)

if __name__ == '__main__':
    app.run(debug=True)