import {ConfigureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

export const store = ConfigureStore({
     reducer:{
        counter: counterReducer
     }
})