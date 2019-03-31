import * as Types from "./types";

export const INITIAL_STATE = {
  messages: [],
  username: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case Types.NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.item]
      };
    case Types.SET_USERNAME:
      return { ...state, username: action.username };
  }
};

export default reducer;
