import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDebounce } from '../Hooks/useDebounce';

export const Counter = () => {
    const [count, setCount] = useState(0);

    // const debouncer = (callback, delay) => {
    //     let debounceId;
    //     return function () {
    //         debounceId && clearTimeout(debounceId);
    //         debounceId = setTimeout(() => {
    //             callback();
    //         }, delay);
    //     }
    // }

    const handleScrollEvent = () => {
        setCount((prev) => prev +1);
    }

    const dValue = useDebounce(count, 1000)

    useEffect(() => {
        window.addEventListener("scroll", handleScrollEvent);
        return () => {
            window.removeEventListener("scroll", handleScrollEvent);           
        }
    }, []);

  return (
    <div>
        <div style={{position: "sticky", top: "100px", marginTop: "200px" }}>
            <h3>Scroll Count: {dValue}</h3>
        </div>
    </div>
  )
}
