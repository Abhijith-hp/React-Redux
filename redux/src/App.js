import './App.css';

import {useSelector }from "react-redux";
import {useDispatch} from "react-redux";
import {increment ,decrement,reset,incrementByAmount} from "./app/slices/counterSlice";
import { useState } from 'react';

function App() {

 
  const count = useSelector((state)=> state.counters.count);
  const dispatch = useDispatch();

  const [amount,setAmount] = useState(0)

  const resetALl = ()=>{
    dispatch(reset());
    setAmount(0)
  }
  return (
    <>
    <div className="app">
      <h1 className="title">Counter App</h1>
      <div className="counter-container">
        <div className="counter-value">{count}</div>
        <div className="button-group">
          <button className="btn btn-decrement" onClick={() => dispatch(decrement())}>-</button>
          <button className="btn btn-reset" onClick={resetALl}>Reset</button>
          <button className="btn btn-increment" onClick={() => dispatch(increment())}>+</button>
        </div>
        <input type="text" className="input-field" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
        <button className="btn btn-increment-by-amount" onClick={() => dispatch(incrementByAmount(amount))}>Add Amount</button>
      </div>
    </div>
    </>
  );
}

export default App;
