import React from 'react'
import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
    const [dValue, setdValue] = useState(value);

    useEffect(() => {
        let newDebounceId = setTimeout(() => {
            setdValue(value)
        }, delay)
        return () => {
            clearTimeout(newDebounceId)
        }
    }, [delay, value]);

  return dValue;
}
