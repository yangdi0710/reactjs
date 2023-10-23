import { useStore, actions } from "./store";
import { SET_TODO_INPUT } from "./store/constants";

function App() {

  const [state, dispatch] = useStore()
  console.log(state);
  const { todos, todoInput} = state

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }

  return (
    <div style={{padding: 20}}>
      <input
        value={todoInput}
        placeholder="Input Todos"
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      >
      </input>

        <button
          onClick={handleAdd}
        >
          Add
        </button>
        {todos.map((todo, index) => (
          <li key={index}>{todos}</li>
        ))}
    </div>
  );
}

export default App;
