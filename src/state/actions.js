import * as Types from './types';
import uuid from 'uuid/v4';

export const newMessage = (text) => ({
  type: Types.NEW_MESSAGE,
  item: { id: uuid(), text, timestamp: Date.now }
})
