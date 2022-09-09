import {createSlice} from '@reduxjs/toolkit';
import {MessageType} from '../../types';
import {loadMessages, createMessage} from './actions';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: {
  messages: MessageType[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
} = {
  messages: [],
  loading: 'idle',
};

type Action = {
  type: string;
  payload?: any;
};

export const MessagesSlice = createSlice({
  name: 'messages',
  initialState: initialState,
  reducers: {
    addMessage(state, action: PayloadAction<MessageType[]>) {
      state.messages = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loadMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(createMessage.fulfilled, (state, action) => {
      state.loading = 'succeeded';
    });
    builder.addCase(createMessage.rejected, (state, action) => {
      console.log('createMessage.rejected', action.payload);
      state.loading = 'failed';
    });
    builder.addCase(createMessage.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(loadMessages.rejected, (state, action) => {
      console.log('loadMessages.rejected', action.payload);
    });
  },
});

export default MessagesSlice.reducer;
export const {addMessage} = MessagesSlice.actions;
