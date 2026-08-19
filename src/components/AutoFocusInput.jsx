import { useEffect, useRef } from "react";

function AutoFocusInput() {
  const inputRef=useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <div className="app-shell">
      <div className="card">
        <h2 className="exercise-title">Q3. Auto-Focus Input Field</h2>
        <p className="exercise-meta">Topic: useRef + useEffect</p>
        <p>Implement the focus behavior here using a ref and effect.</p>
        <input ref={inputRef} placeholder="Type here" />
      </div>
    </div>
  );
}

export default AutoFocusInput;
