import { useState } from "react";

function App() {
  const [jobs, setJobs] = useState([])

  return (
    <div style={{padding: 32}}>
      <input />
      <button >Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
