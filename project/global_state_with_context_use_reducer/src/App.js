import { useStore } from "./store";

function App() {

  const [state, dispatch] = useStore()
  console.log(state);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
