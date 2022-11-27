import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Protected from "./components/Protected";
import Messages from "./components/Messages";
import { Navigate, Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import UserAccount from './components/UserAccount';
import axios from "axios";

function App() {

  let [loginData, setLoginData] = useState(null);
  function setUserData() {
    let token = localStorage.getItem("token");
    let decoded = jwtDecode(token);
    setLoginData(decoded);
  }
  function logout (){
    localStorage.removeItem('token');
    setLoginData(null);
    Navigate('login');
  }
  let [allUsers,setAllUsers]= useState([]);
 async function getAllUsers(){
  let {data}=await axios.get("http://localhost:3000/api/v1/auth/allusers");
  setAllUsers(data.users);
 }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserData();
      getAllUsers();
    }
  }, []);



  return (
    <>
      <Navbar loginData={loginData} logout={logout}/>
      <Routes>
        <Route element={<Protected loginData={loginData} />}>
          <Route path="profile" element={<Profile  />}></Route>
          <Route path="messages" element={<Messages  />}></Route>
        </Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="useraccount" element={<UserAccount allUsers={allUsers} />}></Route>
        <Route path="login" element={<Login setUserData={setUserData} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
