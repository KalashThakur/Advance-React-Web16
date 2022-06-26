import { decrement_count, increment_count } from './action'
import { DECREMENT, INCREMENT, RESET } from './actionTypes'

let initState = { count: 0}

export const reducer = (state = initState, action) => {

    switch(action.type) 
    {
        case INCREMENT: {
            return {
                ...state,
                count: state.count + action.payload
            }
        }

        case DECREMENT: {
            return {
                ...state,
                count: state.count - action.payload
            }

        }

        case RESET: {
            return {
                ...initState,
                
            }

        }

        default: {
            return state;
        }
    }

}
