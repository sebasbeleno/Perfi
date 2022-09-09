import types from './types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import MessagesService from '../../Services/MessagesService';

export const loadMessages = createAsyncThunk(types.LOAD_MESSAGES, async () => {
  try {
    const messages = await MessagesService.fetchMessages();
    if (messages) {
      return messages;
    } else {
      return {};
    }
  } catch (error) {
    console.log('ERROR ON actions.loadMessages', error);
    return error;
  }
});

export const createMessage = createAsyncThunk(
  types.CREATE_MESSAGE,
  async ({content, uid}: {content: string; uid: string}) => {
    try {
      const message = await MessagesService.createMessage(content, uid);
      return message;
    } catch (error) {
      console.log('ERROR ON actions.createMessage', error);
      return error;
    }
  },
);
