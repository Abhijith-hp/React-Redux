import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskslice";

export const store = configureStore({
    reducer:{
        task:taskReducer
    }
})