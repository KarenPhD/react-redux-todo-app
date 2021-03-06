import * as types from './actionTypes'

export const completeTodo = (todo) => ({
    type: types.COMPLETE_TODO,
    payload: todo
})

export const addTodo = (todo) => ({
    type: types.ADD_TODO,
    payload: todo
})

export const deleteTodo = (todo) => ({
    type: types.DELETE_TODO,
    payload: todo
})

export const updateTodo = (todo) => ({
    type: types.UPDATE_TODO,
    payload: todo
})