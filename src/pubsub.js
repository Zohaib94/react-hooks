import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config';

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

const pubnub = new PubNub(pubnubConfig);

pubnub.subscribe({ channels: [MESSAGE_CHANNEL] });

pubnub.addListener({
  message: mObj => {
    console.log(mObj);
  }
})

setTimeout(() => {
  pubnub.publish({
    message: 'testing',
    channel: MESSAGE_CHANNEL
  });
}, 1000)

