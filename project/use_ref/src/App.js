import { useRef, useState, useEffect } from "react";

// Lưu các giá trị qua 1 tham chiếu bên ngoài function component

function App() {

  const [count, setCount] = useState(60)

  const timerId = useRef()
  const prevCount = useRef()

  useEffect(() => {
    prevCount.current = count
  }, [count])

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000);
  }

  const handleStop = () => {
    clearInterval(timerId.current)
  }

  console.log(count, prevCount.current);

  return (
    <div style={{padding: 20}}>
      <h2>{count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
