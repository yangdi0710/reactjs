import { useCallback, useState } from "react";
import Content from "./Content";

// 1. memo() => higher order component (HOC)
// 2. useCallback()
// - Reference types
// - React memo


function App() {

  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <div style={{padding: 20}}>
      <Content onIncrease={handleIncrease} />
      <h2>{count}</h2>
    </div>
  )
}

export default App;
