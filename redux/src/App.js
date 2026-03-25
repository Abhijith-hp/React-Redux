import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="title">Counter App</h1>
      <div className="counter-container">
        <div className="counter-value">0</div>
        <div className="button-group">
          <button className="btn btn-decrement">-</button>
          <button className="btn btn-reset">Reset</button>
          <button className="btn btn-increment">+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
