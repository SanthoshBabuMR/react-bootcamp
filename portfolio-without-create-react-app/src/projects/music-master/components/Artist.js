import React, {Component} from 'react';

class Artist extends Component {

    state = {
        removeTilt: true
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({
            removeTilt: false
        });
        window.setTimeout(() => {
            this.setState({
                removeTilt: true
            });
        }, 1300);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        if (prevProps.artist && prevProps.artist.name !== this.props.artist.name) {
            this.setState({
                removeTilt: false
            });
            window.setTimeout(() => {
                this.setState({
                    removeTilt: true
                });
            }, 1300);
        }
    }

    render () {
        const { artist } = this.props;
        if(!artist) { return null; }
        const {name, followers, images, genres } = artist;
        const image = images.length > 0 ? images[0].url : null
        return (
            <div>
                <h3>{name}</h3>
                <p>{genres.join(", ")}</p>
                <p>{followers.total} followers</p>
                { image ?  <img style={{width: 200, height: 200, borderRadius: '50%' }} src={image} alt='album' className={ this.state.removeTilt ? '' : 'tilt' }/> : null }
            </div>
        )
    }
    
};

export default Artist;
