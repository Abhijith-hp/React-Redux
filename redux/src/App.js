import './App.css';

import {useSelector }from "react-redux";
import {useDispatch} from "react-redux";
import {increment ,decrement,reset} from "./app/slices/counterSlice";

function App() {

 
  const count = useSelector((state)=> state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <h1 className="title">Counter App</h1>
      <div className="counter-container">
        <div className="counter-value">{count}</div>
        <div className="button-group">
          <button className="btn btn-decrement" onClick={() => dispatch(decrement())}>-</button>
          <button className="btn btn-reset" onClick={() => dispatch(reset())}>Reset</button>
          <button className="btn btn-increment" onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
