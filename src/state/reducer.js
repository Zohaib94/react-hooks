import * as Types from "./types";

export const INITIAL_STATE = {
  messages: [],
  username: '',
  reactionsMap: {}
};

const REACTION_TYPES = Types.REACTION_OBJECTS.map(REACTION_OBJECT => REACTION_OBJECT.type)

const reducer = (state, action) => {
  if (REACTION_TYPES.includes(action.type)) {
    let reactionsMap;
    const { messageId } = action.item;
    const messageReactions = state.reactionsMap[messageId];

    if (messageReactions) {
      reactionsMap = {
        ...state.reactionsMap,
        [messageId]: [...messageReactions, action.item]
      }
    } else {
      reactionsMap = {
        ...state.reactionsMap,
        [messageId]: [action.item]
      }
    }

    return { ...state, reactionsMap };
  }

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
