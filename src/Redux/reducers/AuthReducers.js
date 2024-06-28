import { createReducer } from "@reduxjs/toolkit";
import { login } from "../actions/AuthActions";
import { logout } from "../actions/AuthActions";

const initialState = {
  loggedIn: false,
  token:'',
  expiresIn:'',
  error:'',
  user:{
    username:'',
    email:'',
    fName:'',
    lName:'',
    password:'',
    score:"" // o 0 ?
  }
} 

const AuthReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(login,(state,action)=>{
    //guarda el token en el estado de la aplicacion
    //false a true
    alert ('loged Sucessfully!')
    return{
      ...state,
      user:{
        email: action.payload.email,
        name : action.payload.name,
        username: action.payload.username,
        score: action.payload.score
      },
      token: action.payload.token,
      loggedIn: action.payload.loggedIn,
      expiresIn: action.payload.expiresIn
    }
  })
  .addCase(logout,(state,action)=>{
    //true a false
    alert ('nos vimos papu :V!')
    return initialState
  })
})

export default AuthReducer;