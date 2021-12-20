import SpotifyWebApi from 'spotify-web-api-node'

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env

const scopes = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-private",
    "user-read-email",
    "user-follow-read",
    "user-library-read",
    "streaming",
    "user-top-read",
    "user-read-recently-played",
    "playlist-read-collaborative",
    "playlist-read-private"
].join(',');

const params = {
    scope: scopes,
}

const queryParamsString = new URLSearchParams(params)

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString.toString()}`

const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET
});

export { LOGIN_URL }
export default spotifyApi