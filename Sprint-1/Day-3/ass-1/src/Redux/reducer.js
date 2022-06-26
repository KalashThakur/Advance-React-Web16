import { ADD_TODO_ERROR, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionTypes"

const initState = {
    isLoading: false,
    isError: false,
    todos: []
}

export const reducer = (state = initState, action) => {

    switch(action.type)
    {
        case GET_TODO_REQUEST : {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case GET_TODO_SUCCESS : {
            return {  
                ...state,
                todos: action.payload,
                isLoading: false,
                isError: false
            }
        }

        case GET_TODO_ERROR : {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case ADD_TODO_REQUEST: 
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        

        case ADD_TODO_SUCCESS: 
            return {  
                ...state,
                todos: [...state.todos, action.payload],
                isLoading: false,
                isError: false
            }
        

        case ADD_TODO_ERROR: 
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        


        default: 
           return state
    }

}