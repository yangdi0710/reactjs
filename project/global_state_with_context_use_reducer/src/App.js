import { useStore, actions, Storage } from "./store";
import { useRef, useLayoutEffect } from "react";

function App() {

  const [todo, dispatch] = useStore()

  const { todos, todoInput, editIndex, editInput } = todo

  const inputRef = useRef()

  useLayoutEffect(() => {
    // khi component được mounted thì focus input
    inputRef.current.focus();
    // lưu lại mỗi lần todos thay đổi
    Storage.set(todos);
  }, [todos]);

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
        onChange={e => 
          dispatch(actions.setTodoInput(e.target.value))
        }
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
          Delete All
        </button>

        {todos.map((todo, index) => (
          <li key={index} onDoubleClick={() => handleStartEdit({ todo, index})}>
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
                  <button
                    style={{margin: "5px 10px"}}
                    onClick={() => handleStartEdit( { todo, index})}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                  >
                    X
                  </button>
                </span>
              )
            }
          </li>
        ))}
    </div>
  );
}

export default App;
