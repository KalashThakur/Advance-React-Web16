import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    
      <nav style={{display: "flex", justifyContent: "space-around", border: "2px solid black", padding: "18px"}}>
        <Link to='/'>Books</Link>
        <Link to='/admin'>Admin</Link>
      </nav>
    
  )
}