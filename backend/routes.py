from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/get/<title>/<artist>/<rxnTime>', methods = ['GET'])
def get_new_music(title, artist, rxnTime):
    return jsonify({"Title": title,
                    "Artist": artist})

if __name__ == "__main__":
    app.run(debug = True)