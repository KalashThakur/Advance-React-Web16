import React from 'react'

export const TodoItems = ({id, status, title}) => {
    console.log("Todo is rendering", id);
    
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div>{title}</div>
        <div style={{margin: "0 1rem"}}>{status ? "True" : "False"}</div>
    </div>
  )
}
