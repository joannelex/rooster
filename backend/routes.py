from flask import Flask, jsonify
import model

app = Flask(__name__)

@app.route('/', methods = ['GET'])

def get_new_music():
    return jsonify({"The Hills": "The Weeknd"})

if __name__ == "__main__":
    app.run(debug = True)