import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useTimeout } from '../Hooks/useTimeout';

export const Timer = () => {
    
    const ready1 = useTimeout(2000);
    const ready2 = useTimeout(3000);


  return (
    <div>
        <h3>Timer</h3>
        <div>
            {ready1 ? "Ready-1" : "Not-Ready-1"}
            <br />
            {ready2 ? "Ready-2" : "Not-Ready-2"}
        </div>
    </div>
  )
}
