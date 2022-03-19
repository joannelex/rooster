from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/get', methods = ['GET'])
def get_new_music():
    return jsonify({"Baby": "Justin Bieber"})

if __name__ == "__main__":
    app.run(debug = True)