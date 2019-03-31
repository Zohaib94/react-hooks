import * as Types from "./types";
import uuid from "uuid/v4";

export const newMessage = (text, username) => ({
  type: Types.NEW_MESSAGE,
  item: { id: uuid(), text, username, timestamp: Date.now() }
});

export const setUsername = username => ({
  type: Types.SET_USERNAME,
  username
});

export const createReaction = ({type, emoji, username, messageId}) => ({
  type,
  item: { id: uuid(), emoji, username, messageId, timestamp: Date.now}
})
