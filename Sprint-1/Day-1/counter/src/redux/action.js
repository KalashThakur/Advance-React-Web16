import { DECREMENT, INCREMENT } from "./actionTypes"

export const increment_count = (payload) => ({
    type: INCREMENT,
    payload
})

export const decrement_count = (payload) => ({
    type: DECREMENT,
    payload
})
