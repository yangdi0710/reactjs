import { useState } from "react";

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






// import { useState } from "react";

// function App() {
//   const [info, setInfo] = useState({
//     name: "Duy",
//     age: 23,
//     city: "HCM"
//   }
//   )

//   const handleUpdate = function(){
//       setInfo({
//         ...info,
//         addInfo: "Info"
//       }
//     )
//   }

//   return (
//     <div className="App" style={{marginLeft: 20}}>
//       <h2>{JSON.stringify(info)}</h2>
//       <button onClick={handleUpdate}>Increase</button>
//     </div>
//   );
// }

// export default App;



// const gifts = [
//   'CPU',
//   'Memory',
//   'GPU'
// ]

// function App () {

//   const [gift, setGift] = useState()

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)
//     setGift(gifts[index])
//   }

//   return (
//     <div style={{padding: 32}}>
//       <h1>{gift || "Chưa có phần thưởng"}</h1>
//       <button onClick={randomGift}>Lấy phần thưởng</button>
//     </div>
//   )
// }



  

function App () {


  return (
    <div style={{padding: 32}}>
      
    </div>
  )
}
export default App