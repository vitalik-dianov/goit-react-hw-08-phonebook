import { createSlice } from '@reduxjs/toolkit';
import { authLogin, authRegister, authLogout, authRefresh } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        // state.isRefresh = false;
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLogout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authRefresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefresh= false;
      })
      .addCase(authRefresh.pending, state => {
        state.isRefresh = true;
      }).addCase(authRefresh.rejected, state => {
        state.isRefresh = false;
      })
     
















      // .addCase(authLogin.pending, state => {
      //   // state.isRefresh = true;
      // })
      // .addCase(authLogin.rejected, state => {
      //   // state.isRefresh = false;
      // });
  },
});

export const authReducer = authSlice.reducer;
