import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Jokes from './Jokes';
import profile from '../assets/profile.jpg';

class App extends Component {
    state = {
        displayBio: false
    };

    toggleDisplayBio = () => {
        this.setState({
            displayBio: !this.state.displayBio
        });
    }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello</h1>
                <p>My name is Santhosh.</p>
                <Title />
                <p>I'm always looking forward to improve myself, both personally and technically</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Chennai, and code every day</p>
                            <p>My favorite language is JavaScript, and I think React.JS is awesome.</p>
                            <p>Besides coding, I also love tiktok and naruto!</p>
                            <div>
                                <button onClick={this.toggleDisplayBio}>Show less</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                <hr />
                <Jokes />
            </div>
        );
    }
}

export default App;
