import React from 'react';
import "./Button.css";

const Button = ({ children, variant, colorScheme, onClick }) => {
  return (
    // red and ghost will apply byDefault
    <button data-testid="cButton" className={`btn ${colorScheme || "red"} ${variant || "ghost"} `} onClick={onClick}>  
      {children}
    </button>
  )
}

export default Button
