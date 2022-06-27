import React from 'react';
import { getTodoError, getTodoRequest, getTodoSuccess } from './action';
import { ADD_TODO_ERROR, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from './actionTypes';

const initState = {
  todos: [],
  isLoading: false,
  isError:false
}

export const reducer = (state = initState, action) => {

  switch(action.type) {
    case GET_TODOS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        // todos: [...state.todos, action.payload]
        todos: action.payload

      }
    }

    case GET_TODOS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }

    // ***************ADD TO SERVER******************************

    case ADD_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isLoading: false,
        isError: false,
      };

    case ADD_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

      default: 
      return state;
  }
  
}
