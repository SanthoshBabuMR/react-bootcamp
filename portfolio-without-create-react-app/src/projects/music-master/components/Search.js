import React, {Component} from 'react';

class Search extends Component {
    state = {
        searchQuery: ""
    }

    updateSearchQuery = event => {
        this.setState({searchQuery: event.target.value, artist: null, tracks: null})
    }

    handleKeyPress= event => {
        if(event.key === 'Enter') {
            this.updateSearchQuery(event);
            this.fetchArtist();        
        }
    }

    fetchArtist = event => {
        this.props.fetchArtist(this.state.searchQuery);
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.searchQuery}
                    onChange={this.updateSearchQuery}
                    onKeyPress={this.handleKeyPress}
                    placeholder="Search for an Artist"
                />
                <button onClick={this.fetchArtist}>Search</button>
            </div>
        );
    }
}

export default Search;
