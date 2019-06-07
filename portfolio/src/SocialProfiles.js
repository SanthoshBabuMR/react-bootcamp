import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        const {link, image} = this.props.socialProfile;
        return (
            <span style={{margin: 12}}>
                <a href={link}>
                    <img src={image} alt={link} style={{width: 32, height: 32}} />
                </a>                    
            </span>
        );
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Connect with me!</h2>
                {
                    SOCIAL_PROFILES.map(PROFILE => {
                        return (
                            <SocialProfile socialProfile={PROFILE} key={PROFILE.id} />
                        )
                    })
                }
            </div>
        );
    }
}

export default SocialProfiles;
