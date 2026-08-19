import { useEffect, useState } from "react";

function UserDirectory() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div className="app-shell">
      <div className="card">
        <h2 className="exercise-title">Q4. Fetch and Display Users from API</h2>
        <p className="exercise-meta">Topic: useEffect</p>
        <p>Write the API fetch logic and render the user cards here.</p>
        <div className="user-list">
          <div className="user-card">
            <h3>User list will appear here</h3>
            
            {
              users.map((user,i)=>{
                return(
                  <li key={i}>
                  {user.name} - {user.email}
                  </li>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDirectory;
