import { useStore, actions } from "./store";
import { useRef } from "react";

function App() {

  const [todo, dispatch] = useStore()

  const { todos, todoInput, editIndex, editInput } = todo

  const inputRef = useRef()

  const handleAdd = () => {
  if(todoInput){
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(""))
  }    
    inputRef.current.focus()
  }

  const handleStartEdit = ({ todo, index}) => {
    dispatch(actions.startEditTodo({ todo, index }))
  }


  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index))
  }

  const handleDeleteAll = () => {
    dispatch(actions.deleteTodoAll())
    inputRef.current.focus()
  }

  return (
    <div style={{padding: 20}}>
      <input
        value={todoInput}
        placeholder="Input Todos"
        ref={inputRef}       
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

        <button
          onClick={handleDeleteAll}
        >
          Delete
        </button>

        {todos.map((todo, index) => (
          <li key={index} onDoubleClick={handleStartEdit({ todo, index})}>
            { editIndex === index ? (
                <input 
                  autoFocus
                  value={editInput}
                  onChange={e => dispatch(actions.editTodo(e.target.value))}
                  onBlur={() => dispatch(actions.endEditTodo({ editInput, index }))}
                  onKeyUp={e => 
                    e.key === "Enter" && dispatch(actions.endEditTodo({ editInput, index }))
                  }
                />
              ) : (
                <span>
                  {todo}
                  <i
                    onClick={() => handleStartEdit( { todo, index})}
                  >
                    Update
                  </i>
                  <i
                    onClick={() => handleDelete(index)}
                  >
                    X
                  </i>
                </span>
              )
            }
          </li>
        ))}
    </div>
  );
}

export default App;
