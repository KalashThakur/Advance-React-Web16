import React from 'react';

interface ButtonProps {
    label: string;
    handleClick: () => void
}

// export const Button = (props: ButtonProps) => {
//     const {label, handleClick} = props;
export const Button = ( {label, handleClick}: ButtonProps) => {

  return (
    <div>
        <button onClick={handleClick}> {label} </button>
    </div>
  )
}
