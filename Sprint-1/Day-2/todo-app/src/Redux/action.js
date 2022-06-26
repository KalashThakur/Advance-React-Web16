import { GET_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_REQUEST } from "./actionTypes"

export const getTodoRequest = () => ({
    type: GET_TODO_REQUEST,
})

export const getTodoSuccess = (payload) => ({
    type: GET_TODO_SUCCESS,
    payload
})

export const getTodoError = () => ({
    type: GET_TODO_ERROR,
})