function CounterApp() {
  return (
    <div className="app-shell">
      <div className="card">
        <h2 className="exercise-title">Q1. Counter App</h2>
        <p className="exercise-meta">Topic: useState</p>
        <p>Implement the counter logic here using state.</p>
        <div className="row">
          <button disabled>+</button>
          <button disabled>-</button>
          <button disabled>Reset</button>
        </div>
        <p className="count-badge">0</p>
      </div>
    </div>
  );
}

export default CounterApp;
