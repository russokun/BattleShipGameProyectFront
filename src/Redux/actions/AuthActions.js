import {createAction} from "@reduxjs/toolkit";

export const login = createAction("LOGIN", (user) => {
  
  const clearUser ={
    email: user.email,
    name : user.fName + " " + user.lName,
    username: user.username,
    score: user.score,
    token: user.token,
    expiresIn: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
    loggedIn: true
  }

  return {
    payload: clearUser
  };
});

export const logout = createAction("LOGOUT")