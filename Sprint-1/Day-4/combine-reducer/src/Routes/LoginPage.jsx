import React from 'react';
import { Login } from '../Component/Login';
import {useDispatch, useSelector} from "react-redux";
import { loginFailure, loginSuccess } from '../Redux/auth/action';

export const LoginPage = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth)

  const handleLogin = ( {email, password} ) => {
    //fake auth
    if(email === "admin" && password === "admin")
    {
      dispatch(loginSuccess("fakeToken"))
    }
    else{
      dispatch(loginFailure("wrong credentials"))
    }
  }

  if(isAuth) {
    return <Navigate to="/" />
  }


  return (
    <div>
        <Login handleLogin={handleLogin} />
    </div>
  )
}
