import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import ReceivedMessages from "./components/ReceivedMessages";
import Protected from "./components/Protected";
import Messages from "./components/Messages";
import AllUsers from "./components/AllUsers";
import ForgetPassword from "./components/ForgetPassword";
import ReceivedCode from "./components/ReceivedCode";
import { Navigate, Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import SendMessage from './components/SendMessage';
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
  // console.log(data.users);
 
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
          <Route path="receivedmessages" element={<ReceivedMessages  />}></Route>
          <Route path="messages" element={<Messages  />}></Route>
          <Route path="allusers" element={<AllUsers  />}></Route>
        </Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="ReceivedCode" element={<ReceivedCode />}></Route>
        <Route path="ForgetPassword" element={<ForgetPassword />}></Route>
        <Route path="sendmessage" element={<SendMessage allUsers={allUsers} />}></Route>
        <Route path="login" element={<Login setUserData={setUserData} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
