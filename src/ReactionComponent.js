import React, { useReducer, useEffect } from "react";
import reducer, { INITIAL_STATE } from "./state/reducer";
import PubSub from "./pubsub";
import PublishMessage from "./PublishMessage";
import MessageBoard from "./MessageBoard";
import Context from "./state/context";

const pubsub = new PubSub();

function ReactionProject() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject;
    
        console.log('Received message', message, 'channel', channel);
    
        dispatch(message);
      }
    });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <div>
        <h1>Reaction</h1>
        <PublishMessage />
        <hr />
        <MessageBoard />
      </div>
    </Context.Provider>
  );
}

export default ReactionProject;
