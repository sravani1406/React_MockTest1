function ThemeSwitcher() {
  return (
    <div className="app-shell">
      <div className="card">
        <h2 className="exercise-title">Q6. Global Theme Switcher</h2>
        <p className="exercise-meta">Topic: Context API</p>
        <p>Implement the theme context and shared state here.</p>
        <div className="row" style={{ marginBottom: '12px' }}>
          <h3 style={{ margin: 0 }}>Current theme: light</h3>
          <button disabled>Toggle Theme</button>
        </div>
        <p>Dashboard content will react to the shared theme state.</p>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
