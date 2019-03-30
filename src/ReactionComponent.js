import React, { useReducer } from 'react';
import reducer, { INITIAL_STATE } from './state/reducer';

function ReactionProject() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <h1>Reaction</h1>
  )
}

export default ReactionProject;
