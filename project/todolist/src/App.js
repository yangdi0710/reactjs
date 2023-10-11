import { useState } from "react";

function App() {

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    console.log(storageJobs);
    return storageJobs ?? []
  })
  console.log(job);

  const handleSubmit = () => {
    setJobs(prev => {
      const newJob = [...prev, job]

      // Save to localstorage
      const jsonJobs = JSON.stringify(newJob)
      localStorage.setItem('jobs', jsonJobs)

      return newJob
    }) 
    setJob('')
  }

  return (
    <div style={{padding: 32}}>
      <input 
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
