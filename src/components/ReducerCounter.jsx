function ReducerCounter() {
  return (
    <div className="app-shell">
      <div className="card">
        <h2 className="exercise-title">Q5. Counter with Step Values</h2>
        <p className="exercise-meta">Topic: useReducer</p>
        <p>Implement the reducer and dispatch actions here.</p>
        <div className="row">
          <button disabled>+1</button>
          <button disabled>+5</button>
          <button disabled>-1</button>
          <button disabled>Reset</button>
        </div>
        <p className="count-badge">0</p>
      </div>
    </div>
  );
}

export default ReducerCounter;
