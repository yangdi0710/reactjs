import { useReducer, useRef } from "react";

// useReducer
// 1. Init state
const initState = {
  job: '',
  jobs: []
}

// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const REMOVE_JOB = 'remove_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const removeJob = payload => {
  return {
    type: REMOVE_JOB,
    payload
  }
}

// 3. Reducer
const reducer = (state, action) => {

  console.log('Action:', action);
  console.log('Prev state:', state);

  let newState

  switch(action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break

    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break

      case REMOVE_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)

      newState = {
        ...state,
        jobs: newJobs
      }
      break

    default:
      throw new Error('Invalid action')
  }

  console.log('New state:', newState);
  return newState
}

function App() {

  // 4. Dispatch
  const [state, dispatch] = useReducer(reducer, initState)

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
