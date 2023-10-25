import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO, DELETE_TODO_ALL, EDIT_TODO, START_EDIT_TODO, END_EDIT_TODO } from "./constants";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const deleteTodo = payload => ({
    type: DELETE_TODO,
    payload
})

export const deleteTodoAll = payload => ({
    type: DELETE_TODO_ALL,
    payload
})

export const startEditTodo = payload => ({
    type: START_EDIT_TODO,
    payload
})

export const editTodo = payload => ({
    type: EDIT_TODO,
    payload
})

export const endEditTodo = payload => ({
    type: END_EDIT_TODO,
    payload
})