import { ADD_TODO_ERROR, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionTypes"


// **********GET from server****************

export const getTodoRequest = () => {
    return {
        type: GET_TODO_REQUEST
    }
}

export const getTodoSuccesst = (payload) => {
    return {
        type: GET_TODO_SUCCESS,
        payload
    }
}

export const getTodoError = () => {
    return {
        type: GET_TODO_ERROR
    }
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