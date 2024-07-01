// src/reducers/AuthReducer.js

import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "../actions/AuthActions";

const initialState = {
  loggedIn: false,
  token: '',
  expiresIn: '',
  error: '',
  user: {
    username: '',
    email: '',
    fName: '',
    lName: '',
    password: '',
    isAdmin: false,
    score: "" // o 0 ?
  }
};

const AuthReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      return {
        ...state,
        user: {
          email: action.payload.email,
          name: action.payload.name,
          username: action.payload.username,
          isAdmin: action.payload.isAdmin,
          score: action.payload.score
        },
        token: action.payload.token,
        loggedIn: true,
        expiresIn: action.payload.expiresIn
      };
    })
    .addCase(logout, (state) => {
      return initialState;
    });
});

export default AuthReducer;
