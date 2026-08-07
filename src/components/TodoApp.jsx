function TodoApp() {
  return (
    <div className="app-shell">
      <div className="card">
        <h2 className="exercise-title">Q2. Dynamic To-Do List</h2>
        <p className="exercise-meta">Topic: useState (array state)</p>
        <p>Implement the add-item flow and render the tasks here.</p>
        <div className="row">
          <input placeholder="Enter a task" />
          <button disabled>Add</button>
        </div>
        <ul>
          <li>Student task list will appear here</li>
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
