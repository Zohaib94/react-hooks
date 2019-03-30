import React, { useReducer } from 'react';
import reducer, { INITIAL_STATE } from './state/reducer';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';

function ReactionProject() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <h1>Reaction</h1>
      <PublishMessage dispatch={dispatch} />
      <hr />
      <MessageBoard messages={state.messages} />
    </div>
  )
}

export default ReactionProject;
