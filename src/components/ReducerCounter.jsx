import { useReducer } from "react"

function ReducerCounter() {
  const initialSate={
    count:0
  }
  const reducer=(state,action)=>{
    switch(action.type){
      case "INC_ONE":
        return{
          ...state,
          count:state.count+1
        }
      case "INC_FIVE":
        return{
          ...state,
          count:state.count+5
        }
      case "DEC_ONE":
        return{
          ...state,
          count:state.count-1
        }
      case "reset":
        return{
          ...state,
          count:0
        }
      default:
        return state
    }
  }

  const [state,dispatch]=useReducer(reducer,initialSate) 

  return (
    <div className="app-shell">
      <div className="card">
        <h2 className="exercise-title">Q5. Counter with Step Values</h2>
        <p className="exercise-meta">Topic: useReducer</p>
        <p>Implement the reducer and dispatch actions here.</p>
        <div className="row">
          <button onClick={()=>dispatch({type:"INC_ONE"})}>+1</button>
          <button onClick={()=>dispatch({type:"INC_FIVE"})}>+5</button>
          <button onClick={()=>dispatch({type:"DEC_ONE"})}>-1</button>
          <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
        <p className="count-badge">0</p>
        <h1>{state.count}</h1>
      </div>
    </div>
  );
}

export default ReducerCounter;
