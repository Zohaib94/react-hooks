import * as Types from './types';

export const INITIAL_STATE = {
  messages: []
}

const reducer = (state, action) => {
  switch(action.type){
    default: 
      return state
    case Types.NEW_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.item]
      }
    }
  }
}

export default reducer;
