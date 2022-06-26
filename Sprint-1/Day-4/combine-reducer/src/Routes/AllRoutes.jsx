import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { LoginPage } from "./LoginPage";

export const AllRoutes = () => {
  return (
    <>
      <div>
        <Link to="/">TASKS</Link>
        <Link to="/login">LOGIN</Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage /> } /> 
        <Route  element={<h3>Error</h3>}/>
      </Routes>
    </>
  );
};
