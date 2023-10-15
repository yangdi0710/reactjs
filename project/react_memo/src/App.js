import { useState } from "react";
import Content from "./Content";

// 1. memo() => higher order component (HOC)
// 2. useCallback()

// Hook
// HOC
// Render props


function App() {

  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  return (
    <div style={{padding: 20}}>
      <Content />
      <h2>{count}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default App;
