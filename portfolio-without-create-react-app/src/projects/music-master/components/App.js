import React, {Component} from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';
class App extends Component {
    state = {
        artist: null,
        tracks: null
    }

    componentDidMount() {
        this.fetchArtist('Rahman');
    }

    fetchArtist = searchQuery => {
        fetch(`${API_ADDRESS}/artist/${searchQuery}`)
        .then(resp => resp.json())
        .then(json => {
            if(json.artists.total > 0) {
                const artist = json.artists.items[0];
                this.setState({
                    artist
                })
                this.fetchTracks();
            }
        })
        .catch(error => alert(error.message));
    }

    fetchTracks = event => {
        fetch(`${API_ADDRESS}/artist/${this.state.artist.id}/top-tracks`)
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                tracks: json.tracks
            })
        })
        .catch(error => alert(error.message));
    }

    render() {
        return (
            <div>
                <h1>Music Master</h1>
                    <Search fetchArtist={this.fetchArtist} />
                    <Artist artist={this.state.artist} />
                    <Tracks tracks={this.state.tracks} />
            </div>
        );
    }
}

export default App;
