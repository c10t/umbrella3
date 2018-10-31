import json

from flask import Flask, jsonify, make_response

app = Flask(__name__)


@app.route("/")
def index():
    return "<h3>Hello World!</h3>"


@app.route("/api/stories", methods=['GET'])
def getStories():
    return make_response(jsonify(read()))


def read():
    with open('./resources/sample.json', encoding='utf-8') as f:
        stories = json.load(f)

    return stories


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=2572, debug=True)
