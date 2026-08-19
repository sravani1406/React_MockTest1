import { use, useState } from "react";

function TodoApp() {
  const [text,setText]=useState("")
  const [items,setItems]=useState([])
  return (
    <div className="app-shell">
      <div className="card">
        <h2 className="exercise-title">Q2. Dynamic To-Do List</h2>
        <p className="exercise-meta">Topic: useState (array state)</p>
        <p>Implement the add-item flow and render the tasks here.</p>
        <div className="row">
          <input type="text" name="" id="" placeholder="Enter a task" value={text} onChange={(e)=>setText(e.target.value)}/>
          <button onClick={()=>{setItems([...items,text]),setText("")}}>Add</button>
          
        </div>
        <ul>
          <li>Student task list will appear here</li>
          {
            items.map((item,i)=>{
              return(
              <li key={i}>
              {item}
              </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
