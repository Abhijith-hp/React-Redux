import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    count:0
}
const counterSlice = createSlice({
           name: "counter",
           intialState: intialState,
           reducers:{
              increment: (state) =>{
                state.count+=1;
              },

              decrement:(state)=>{
                state.count-=1;
              }
           }



})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;