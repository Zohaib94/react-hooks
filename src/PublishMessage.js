import React, { useState } from 'react';
import { newMessage } from './state/actions'
import { useAppContext } from './Hooks';

function PublishMessage() {
  const [text, setText] = useState('');
  const { state: { username }, pubsub } = useAppContext();

  const updateText = event => {
    setText(event.target.value);
  };

  const addMessage = () => {
    pubsub.publish(newMessage(text, username))
  };

  return (
    <div className="form">
    <input
      value={text}
      onChange={updateText}
    />
    <button onClick={addMessage}>Search</button>
  </div>
  )
}

export default PublishMessage;
