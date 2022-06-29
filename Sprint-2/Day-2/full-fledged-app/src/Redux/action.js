import { GET_BOOKS_ERROR, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes"
import axios from "axios";

export const getBooksRequest = () => ({
    type: GET_BOOKS_REQUEST
})

export const getBooksSuccess = (payload) => ({
    type: GET_BOOKS_SUCCESS,
    payload
})

export const getBooksError = () => ({
    type: GET_BOOKS_ERROR
})

export const getBooks = () => dispatch => {
    dispatch(getBooksRequest())
    axios.get("/books")
    .then((res) => dispatch(getBooksSuccess(res.data)))
    .catch((err) => dispatch(getBooksError(err))) 
}