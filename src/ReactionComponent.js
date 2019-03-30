import React, { useReducer } from 'react';
import reducer, { INITIAL_STATE } from './state/reducer';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
import Context from './state/context';

function ReactionProject() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <Context.Provider value={{state, dispatch}}>
      <div>
        <h1>Reaction</h1>
        <PublishMessage />
        <hr />
        <MessageBoard />
      </div>
    </Context.Provider>
  )
}

export default ReactionProject;
