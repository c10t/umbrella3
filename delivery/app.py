import json

from flask import Flask, jsonify, make_response, abort, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/story/<id>", methods=['GET'])
def getStory(id):
    print(f"get {id}")
    story = search(id)
    print(story)
    if story is None:
        abort(404)

    return make_response(jsonify(story))


@app.route("/api/stories", methods=['GET'])
def getStories():
    return make_response(jsonify(read()))


def read():
    with open('./resources/sample.json', encoding='utf-8') as f:
        stories = json.load(f)

    return stories


def search(id):
    stories = read()
    for story in stories:
        if str(id) == str(story["id"]):
            return story

    return None


@app.errorhandler(404)
def not_found(err):
    print(err)
    return jsonify(error="404 Not Found")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=2572, debug=True)
