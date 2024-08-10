import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sendMessageAPI } from './chatAPI';

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (message) => {
    const response = await sendMessageAPI(message);
    return response.data;
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages.push(action.payload);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default chatSlice.reducer;
