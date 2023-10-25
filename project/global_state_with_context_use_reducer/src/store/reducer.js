import { 
    ADD_TODO, 
    DELETE_TODO, 
    DELETE_TODO_ALL, 
    SET_TODO_INPUT, 
    START_EDIT_TODO, 
    EDIT_TODO, 
    END_EDIT_TODO } from "./constants"
import storage from "./storage";

const initState = {
    todos: storage.get(),
    todoInput: '',
    editIndex: null,
    editInput: ""
}

function reducer(state, action) {
    switch(action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            let newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }
        case DELETE_TODO_ALL:
            return {
                ...state,
                todos: []
            }
        case START_EDIT_TODO:
            return {
                ...state,
                editIndex: action.payload.index,
                editInput: action.payload.todo
            }
        case EDIT_TODO:
            return {
                ...state,
                editInput: action.payload
            }
        case END_EDIT_TODO:
            state.todos[action.payload.index] = action.payload.editInput
            storage.set(state.todos);
            return {
                ...state,
                editIndex: null
            }    
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer