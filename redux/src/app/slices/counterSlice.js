import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}
const counterSlice = createSlice({
           name: "counter",
           initialState: initialState,
           reducers:{
              increment:{
                reducer(state){
                  state.count+=1;
                }
              } ,

              decrement:(state)=>{
                state.count-=1;
              },

              reset :(state)=>{
                state.count=0;
              },
              incrementByAmount:{
                reducer(state,action){
                state.count += action.payload;
              },
              prepare(amount){
                return {payload: amount}
              }
              }
           }



})

export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;