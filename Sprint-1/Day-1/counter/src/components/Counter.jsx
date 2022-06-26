import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { decrement_count, increment_count, reset_count } from '../redux/action';

// useSelector is used to access the data from the store

export const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    console.log('count:', count)

  return (
    <div>
        <h1>Counter: {count} </h1>
        <button onClick={() => dispatch(increment_count(1))}>Increment</button>
        <button onClick={() => dispatch(decrement_count(1))}>Decrement</button>
        <button onClick={() => dispatch(reset_count(1))}>Reset</button>
    </div>
  )
}
