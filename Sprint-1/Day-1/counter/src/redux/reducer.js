import React from 'react'
import { decrement_count, increment_count } from './action'

let initState = { count: 0}

export const reducer = (state = initState, action) => {

    switch(action.type) 
    {
        case increment_count: {
            return {
                ...state,
                count: state.count + action.payload
            }
        }

        case decrement_count: {
            return {
                ...state,
                count: state.count - action.payload
            }

        }

        default: {
            return state;
        }
    }

}
