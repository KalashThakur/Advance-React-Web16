import axios from "axios"
import { GET_TODOS_SUCCESS, GET_TODOS_ERROR, GET_TODOS_REQUEST, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_ERROR } from "./actionTypes"

export const getTodoRequest = () => ({
    type: GET_TODOS_REQUEST,
})

export const getTodoSuccess = (payload) => ({
    type: GET_TODOS_SUCCESS,
    payload
})

export const getTodoError = () => ({
    type: GET_TODOS_ERROR,
})

// export const getTodo = () => (dispatch) => {
export const getTodo = (dispatch) => {
    dispatch(getTodoRequest());
    axios.get("http://localhost:3000/todos")
    .then((res) => dispatch(getTodoSuccess(res.data)))
    .catch((err) => dispatch(getTodoError(err)))
}

// **********POST on server****************

export const addTodoRequest = () => {
    return {
        type: ADD_TODO_REQUEST
    }
}

export const addTodoSuccesst = (payload) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload
    }
}

export const addTodoError = () => {
    return {
        type: ADD_TODO_ERROR
    }
}