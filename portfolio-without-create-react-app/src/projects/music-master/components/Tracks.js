import React, {Component} from 'react';
import Artist from './Artist';

class Tracks extends Component {
    state = {
        playing: false,
        audio: null,
        preview_url: null
    }

    componentWillReceiveProps() {
        this.state.audio && this.state.audio.pause();
    }
    
    componentWillUnmount() {
        this.state.audio && this.state.audio.pause();
        this.setState({
            playing: false,
            audio: null,
            preview_url: null
        })
    }

    playPreview = (preview_url) => () => {
        const audio = new Audio(preview_url);

        if(!preview_url) {
            return;
        }
        if(this.state.playing) {
            this.state.audio.pause();
            if (preview_url !== this.state.preview_url) {
                audio.play();
                this.setState({
                    playing: true,
                    audio,
                    preview_url
                });
            } else {
                this.setState({
                    playing: false
                });
            }
        } else {
            audio.play();
            this.setState({
                playing: true,
                audio,
                preview_url
            });
        }
        
    }
    trackIcon = track => {
        const play = <span>&#9654;</span>;
        const pause = <span>| |</span>
        const na = 'N/A'
        if (!track.preview_url) {
            return na;
        }
        if (this.state.preview_url === track.preview_url) {
            if (this.state.playing) {
                return pause;
            } else {
                return play;
            }
        }
        return play;
    }

    render() {
        const {tracks} = this.props;
        if (!tracks) { return null; }
        return (
            <div>
                <h2>Tracks</h2>
                <div className="tracks">
                    {
                        tracks.map(track => {
                            const { id, name, preview_url, duration_ms, album: { images } } = track;
                            const image = images.length > 0 ? images[0].url : "";
                            return (
                                <div 
                                    key={id} 
                                    className='track'
                                    onClick={this.playPreview(preview_url)}>
                                    <img 
                                        className='track-image'
                                        src={image} 
                                        alt="track-image"
                                    />
                                    <p  className='track-text'>{name}</p>
                                    <p  className='track-icon'>{this.trackIcon(track)}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Tracks;
