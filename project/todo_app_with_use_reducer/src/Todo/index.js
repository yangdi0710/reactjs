import { useReducer, useRef } from "react";
import reducer, {initState} from "./reducer";
import {setJob, addJob, removeJob} from './actions'
import logger from "./logger";

// useReducer
// 1. Init state


// 2. Actions


// 3. Reducer


function App() {

  // 4. Dispatch
  const [state, dispatch] = useReducer(logger(reducer), initState)

  const { job, jobs} = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }

  return (
    <div style={{padding: 30}}>

      <h2>ToDo App</h2>

      <input
        value={job}        
        ref={inputRef}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />

      <button
        onClick={handleSubmit}
      >
        Add
      </button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(removeJob(index))}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
