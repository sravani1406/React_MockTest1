import { useState } from "react";

function CounterApp() {
  const [count,setCount]=useState(0);
  return (
    <div className="app-shell">
      <div className="card">
        <h2 className="exercise-title">Q1. Counter App</h2>
        <p className="exercise-meta">Topic: useState</p>
        <p>Implement the counter logic here using state.</p>
        <div className="row">
          <button onClick={()=>setCount((prev=>prev+1))}>+</button>
          <button onClick={()=>count>0 && setCount((prev=>prev-1))}>-</button>
          <button onClick={()=>setCount(0)}>Reset</button>
        </div>
        <p className="count-badge">0</p>
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default CounterApp;
