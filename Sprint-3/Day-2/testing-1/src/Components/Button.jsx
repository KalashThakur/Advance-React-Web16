import React from 'react';
import "./Button.css";

export const Button = ({children, variant, colorScheme, onClick}) => {
  return (
    <button data-testid="cButton" className={`btn ${colorScheme || "red"} ${variant || "ghost"}`} onClick={onClick}>
        {children}
    </button>
  )
}
