import {
  ADD_TODO_ERROR,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
  REMOVE_TODO_REQUEST,
  REMOVE_TODO_SUCCESS,
  TOGGLE_TODO_ERROR,
  TOGGLE_TODO_REQUEST,
  TOGGLE_TODO_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  todos: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {

    // ***************GET FROM SERVER******************************

    case GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
        isError: false,
      };
    }

    case GET_TODO_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
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

    // *************Toggle Status********************************

    case TOGGLE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case TOGGLE_TODO_SUCCESS:
      let newToggleStatus = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return {
        ...state,
        todos: newToggleStatus,
        isLoading: false,
        isError: false,
      };

    case TOGGLE_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };


      // ***************DELETE FROM SERVER******************************

    case REMOVE_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case REMOVE_TODO_SUCCESS: {
          const deleteTodo = state.todos.filter((item) => item.id !== action.payload)
      return {
        ...state,
        todos: deleteTodo,
        isLoading: false,
        isError: false,
      };
    }

    case REMOVE_TODO_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
