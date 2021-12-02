from flask import Flask, jsonify, request, render_template
import os
import subprocess
app = Flask(__name__)
incoming = ""
@app.route("/python", methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        print('Incoming..')
        json_incoming = request.get_json()
        incoming = json.dumps(json_incoming)
        print(incoming)
        f = open('scripts.py', 'rw')
        f.write(incoming)
        f.close()
        try:
            outcoming = subprocess.check_output(['python3','scripts.py'])
        except subprocess.CalledProcessError as err:
            print(err)
    else:
        if len(incoming) != 0:
            message = incoming
        return jsonify(message)
# https://python-interpreter1.herokuapp.com/
