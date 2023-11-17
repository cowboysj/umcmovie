import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./redux/loginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
export default store;
