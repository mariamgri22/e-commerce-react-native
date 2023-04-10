import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, {payload}) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    register: (state, {payload}) => {
      // const { name, email, password } = payload;
      // state.user = {
      //   name,
      //   email,
      //   password,
      // };
      state.user = payload
      state.isLoggedIn = true;
    },
    updateProfile: (state, {payload}) => {
      state.user = {
        ...state.user,
        ...payload,
      };
    },
  },
});

export const { login, logout, updateProfile, register } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export const { reducer } = userSlice;
