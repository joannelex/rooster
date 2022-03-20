import requests

spotify_token = "402553ca7a854e90a1827ffce576b714"

def get_URL(title, artist):
    """Search For the Song"""
    query = "https://api.spotify.com/v1/search?query=track%3A{}+artist%3A{}&type=track&offset=0&limit=20".format(
        title,
        artist
    )
    response = requests.get(
        query,
        headers={
            "Content-Type": "application/json",
            "Authorization": "Bearer {}".format(spotify_token)
        }
    )
    response_json = response.json()
    songs = response_json["tracks"]["items"]

    # only use the first song
    uri = songs[0]["uri"]

    return uri