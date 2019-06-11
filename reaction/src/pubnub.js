import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config';
import { setMessage } from './actions/messages';

const pubnub = new PubNub(pubnubConfig);

const MESSAGING_CHANNEL = 'MESSAGING_CHANNEL';

pubnub.subscribe({
    channels: [MESSAGING_CHANNEL]
});

pubnub.addListener({
    message: messagingObject => {
        console.log(messagingObject);
        setMessage(messagingObject);
    }
});

window.setTimeout(() => {
    pubnub.publish({
        message: '"hello there" from Reaction!!',
        channel: MESSAGING_CHANNEL
    })
}, 1000);
