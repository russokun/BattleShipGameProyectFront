import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducers";
export const store = configureStore({
  reducer: {
    //Aqui van los reductores
    AuthReducer
  },
});
export default store;