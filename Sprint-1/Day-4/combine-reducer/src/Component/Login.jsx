import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux";

export const Login = ( {handleLogin} ) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {email, password}
        handleLogin(payload)
    }

  return (
    <div>
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='email' />
            <br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <input type="submit" />
        </form>
    </div>
  )
}
