import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

export const useDebounceCallback = (func, delay) => {

    const debounceId = useRef();

    useEffect(() => {
        let newDebounceId = setTimeout(() => {
            func()

        }, delay);
        return (() => {
            clearTimeout(newDebounceId)
        })
    }, [delay, func])
  
}
