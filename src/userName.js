import React from 'react';
import { useAppContext } from './Hooks';
import { setUsername } from './state/actions';

function userName() {
  const { state, dispatch } = useAppContext();

  const updateUsername = event => {
    dispatch(setUsername(event.target.value));
  }

  return (
    <div>
      <h3>Username</h3>
      <input type="text" onChange={updateUsername} value={state.username} />
    </div>
  )
};

export default userName;
