import { ADD_TODO_ERROR, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_REQUEST, GET_TODO_SUCCESS, REMOVE_TODO_ERROR, REMOVE_TODO_REQUEST, REMOVE_TODO_SUCCESS, TOGGLE_TODO_ERROR, TOGGLE_TODO_REQUEST, TOGGLE_TODO_SUCCESS } from "./actionTypes"


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


// **********PATCH(edit) on server****************

export const toggleTodoRequest = () => {
    return {
        type: TOGGLE_TODO_REQUEST
    }
}

export const toggleTodoSuccesst = (payload) => {
    return {
        type: TOGGLE_TODO_SUCCESS,
        payload
    }
}

export const toggleTodoError = () => {
    return {
        type: TOGGLE_TODO_ERROR
    }
}

// **********DELETE on server****************

export const removeTodoRequest = () => {
    return {
        type: REMOVE_TODO_REQUEST
    }
}

export const removeTodoSuccess = (payload) => {
    return {
        type: REMOVE_TODO_SUCCESS,
        payload
    }
}

export const removeTodoError = () => {
    return {
        type: REMOVE_TODO_ERROR
    }
}