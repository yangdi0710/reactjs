import { useState, useReducer } from "react";

// useState
// 1. Init state: 0
// 2. Actions: increase (state + 1) / decrease (state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: increase (state + 1) / decrease (state - 1)
// 3. Reducer
// 4. Dispatch

// 1. Init state
const initState = 0

// 2. Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// 3. Reducer
const reducer = (state, action) => {
  switch(action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Invalid action')
  }
}

// 4. Dispatch


function App() {

  const [count, dispatch] = useReducer(reducer, initState)

  return (
    <div style={{padding: 20}}>
      <h1>{count}</h1>
      <br/>
      <button
        onClick={() => dispatch(DOWN_ACTION)}
      >
        Decrease
      </button>

      <button
        onClick={() => dispatch(UP_ACTION)}
      >
        Increase
      </button>
    </div>
  );
}

export default App;
