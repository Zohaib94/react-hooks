import React from "react";
import { useAppContext } from './Hooks';
import CreateReaction from "./createReaction";
import MessageReactions from "./MessageReactions";

function MessageBoard() {
  const { state } = useAppContext();

  return (
    <div>
      {state.messages.map(message => {
        const { id, text, timestamp, username } = message;

        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleString()}</h4>
            <p>{text}</p>
            <h4>{username}</h4>
            <CreateReaction messageId={id} />
            <MessageReactions messageReactions={state.reactionsMap[id]} />
          </div>
        );
      })}
    </div>
  );
}

export default MessageBoard;
