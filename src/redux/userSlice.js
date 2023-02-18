import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload; //імя з інпуту
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = ''; // Поверне первинне значення
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
