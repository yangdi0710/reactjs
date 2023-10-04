// import { useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(1)

//   const handleIncrease = function(){
//     setCounter(counter + 1)
//   }

//   return (
//     <div className="App" style={{marginLeft: 20}}>
//       <h2>{counter}</h2>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }

// export default App;





// import { useState } from "react";

// const orders = [100, 200, 400]

// function App() {
//   const [counter, setCounter] = useState(() => {
//     const total = orders.reduce((acc, curr) => acc + curr)
//     return total
//   })

//   const handleIncrease = function(){
//     setCounter(prevState => prevState + 1)
//   }

//   return (
//     <div className="App" style={{marginLeft: 20}}>
//       <h2>{counter}</h2>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }

// export default App;






import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    name: "Duy",
    age: 23,
    city: "HCM"
  }
  )

  const handleUpdate = function(){
      setInfo({
        ...info,
        addInfo: "Info"
      }
    )
  }

  return (
    <div className="App" style={{marginLeft: 20}}>
      <h2>{JSON.stringify(info)}</h2>
      <button onClick={handleUpdate}>Increase</button>
    </div>
  );
}

export default App;
