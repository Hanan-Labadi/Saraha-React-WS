import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import UserAccount from './components/UserAccount';

function App() {
  let [loginData, setLoginData] = useState(null);
  function setUserData() {
    let token = localStorage.getItem("token");
    let decoded = jwtDecode(token);
    setLoginData(decoded);
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserData();
    }
  }, []);
  return (
    <>
      <Navbar loginData={loginData}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="useraccount" element={<UserAccount />}></Route>
        <Route path="login" element={<Login setUserData={setUserData} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
