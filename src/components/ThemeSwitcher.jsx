import { createContext, useContext, useState } from "react";

const ThemeContext=createContext()


function ThemeHeader(){
  const {theme,toggleTheme}=useContext(ThemeContext)
  
  return(
    <div className="row" style={{ marginBottom: '12px' }}>
      <h3 style={{ margin: 0 }}>Current theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

function ThemeDashboard(){
  const {theme}=useContext(ThemeContext)

  return(
    <div className={`dashboard-preview ${theme}`}
    style={{
        padding: '15px',
        borderRadius: '6px',
        marginTop: '10px',
        backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
        color: theme === "light" ? "#333333" : "#ffffff",
        border: theme === "light" ? "1px solid #e0e0e0" : "1px solid #333333"
      }}>
      <p>Dashboard content will react to the shared theme state.</p>
    </div>
  )
}

function ThemeSwitcher() {
  const [theme,setTheme]=useState("light")
  const toggleTheme=()=>{
    setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"))
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="app-shell">
      <div 
          className={`card ${theme}`}
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#121212",
            color: theme === "light" ? "#000000" : "#ffffff",
            transition: "background-color 0.3s ease, color 0.3s ease" // Smooth transition effect
          }}
        >
        <h2 className="exercise-title">Q6. Global Theme Switcher</h2>
        <p className="exercise-meta">Topic: Context API</p>
        <p>Implement the theme context and shared state here.</p>
        <ThemeHeader />
        <ThemeDashboard />
      </div>
    </div>
     </ThemeContext.Provider>
    
  );
}

export default ThemeSwitcher;
