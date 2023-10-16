import { useState, useRef, useMemo } from "react";

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProduct] = useState([])

  const nameRef = useRef()
  const handleSubmit = () => {
    setProduct([...products, {
      name,
      price: parseInt(price)
    }])

    setName('')
    setPrice('')

    nameRef.current.focus()
  }
  console.log(products);

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log('re-render');
      return result + prod.price
    }, 0)

    return result
  }, [products])
  

  return (
    <div style={{padding: 30}}>
      <input 
        value={name}
        ref={nameRef}
        placeholder="Enter name..."
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input 
        value={price}
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;