from flask import Flask, jsonify
import finder
import model

app = Flask(__name__)

@app.route('/get/<title>/<artist>/<rxnTime>', methods = ['GET'])
def get_new_music(title, artist, rxnTime):
    model.put_new_song_info(title, artist, rxnTime)
    new_title = model.get_new_song_title()
    new_artist = model.get_new_song_artist()
    return jsonify({"URL": finder.get_URL(new_title, new_artist),
                    "Title": new_title,
                    "Artist": new_artist})

if __name__ == "__main__":
    app.run(debug = True)