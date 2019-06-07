import React, {Component} from 'react';

const TITLES = [
    'a software engineer',
    'a naruto fan',
    'an adventure seeker',
    'tiktok lover'
];

class Title extends Component {
    state = {
        titleIndex : 0,
        fadeIn: true
    };

    componentDidMount () {
        this.animationTimeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
        this.animateTitles();
    }

    componentWillUnmount() {
        window.clearInterval(this.titleInterval);
        window.clearTimeout(this.animationTimeout);
    }

    animateTitles = () => {
        this.titleInterval = window.setInterval(() => {
            this.setState({
                titleIndex: (this.state.titleIndex + 1) % TITLES.length,
                fadeIn: true
            });
            this.animationTimeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
        }, 4000);
    }

    render () {
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];

        return (
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>
                I am {title}
            </p>
        );
    }
}

export default Title;