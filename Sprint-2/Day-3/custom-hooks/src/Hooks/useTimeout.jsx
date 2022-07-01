import { useEffect } from 'react';
import { useState } from 'react'

export const useTimeout = (delay) => {

    const [ready, setReady] = useState(false);
    
        useEffect(() => {
            let timer = setTimeout(() => {
                setReady(true)
            }, delay);
            return () => {
                clearTimeout(timer)
            }
        }, [delay]);

        return ready
}
