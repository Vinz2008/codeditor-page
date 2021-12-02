from flask import Flask, jsonify, request, render_template
app = Flask(__name__)

@app.route("/python", methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        print('Incoming..')
        incoming = request.get_json()
    else:
        message = {'greeting':'Hello from Flask!'}
        return jsonify(message)
# https://python-interpreter1.herokuapp.com/
