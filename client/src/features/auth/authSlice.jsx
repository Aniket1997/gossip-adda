import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserAPI, registerUserAPI } from './authAPI';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData) => {
    const response = await loginUserAPI(userData);
    return response.data;
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData) => {
    // Log FormData contents in the action
    console.log('FormData in action:');
    for (let [key, value] of userData.entries()) {
      if (value instanceof File) {
        console.log(`${key}: ${value.name}, ${value.size} bytes, ${value.type}`);
      } else {
        console.log(`${key}: ${value}`);
      }
    }

    const response = await registerUserAPI(userData);
    return response.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
