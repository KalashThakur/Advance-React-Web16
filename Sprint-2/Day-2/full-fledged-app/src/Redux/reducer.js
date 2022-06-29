import { GET_BOOKS_ERROR, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes";

 const initState = {
    isLoading: false,
    isError: false,
    books: [],
  };
  
  export const reducer = (state = initState, action) => {
    switch (action.type) {
  
      // ***************GET FROM SERVER******************************
  
      case GET_BOOKS_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
  
      case GET_BOOKS_SUCCESS: {
        return {
          ...state,
          books: action.payload,
          isLoading: false,
          isError: false,
        };
      }
  
      case GET_BOOKS_ERROR: {
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
  