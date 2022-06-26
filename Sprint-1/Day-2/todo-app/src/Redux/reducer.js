import React from 'react';
import { getTodoError, getTodoRequest, getTodoSuccess } from './action';

const initState = {
  todos: [],
  isLoading: false,
  isError:false
}

export const reducer = (state = initState, action) => {

  switch(action.type) {
    case getTodoRequest: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case getTodoSuccess: {
      return {
        ...state,
        isLoading: false,
        todos: [...state.todos, action.payload]
      }
    }

    case getTodoError: {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
  }
  
}
