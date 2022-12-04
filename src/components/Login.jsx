import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login({ setUserData }) {
  let [user, setUser] = useState({
    password: "",
    email: "",
  });
  
  let [loading, setLoading] = useState(false);
  let [errorMsg, setErrorMsg] = useState("");

  let navigate = useNavigate();
  function ReceivedMessages() {
    let path = "/ReceivedMessages";
    navigate(path);
  }
  let submitFormData = async (e) => {
    e.preventDefault();
    let { data } = await axios.post("http://localhost:3000/api/v1/auth/signin",user);
    if (data.message === "login") {
      setErrorMsg("");
      setLoading(true);
      localStorage.setItem("token", data.loginToken);
      setUserData();
      ReceivedMessages();
      
    } else {
      setLoading(false);
      setErrorMsg("Incorrect Email or Password ");
    }
  };
  let getFormValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  return (
    <div className="container text-center my-5">
      <div className="user my-3">
        <i className="fas fa-user-secret user-icon" />
        <h4 className="login">Login</h4>
      </div>

      <div className="card p-5 w-50 m-auto">
        <form method="POST" action="/handleLogin" onSubmit={submitFormData}>
          <input
            className="form-control"
            placeholder="Enter your email"
            onChange={getFormValue}
            type="text"
            name="email"
          />
          <input
            className="form-control my-4 "
            placeholder="Enter your Password"
            onChange={getFormValue}
            type="text"
            name="password"
          />
          {errorMsg ? (<label className="alert alert-danger w-100">{errorMsg}</label>) : ("")}
          <button
            className="btn btn-default-outline my-4 w-100 rounded"
            type="submit"
          >
            {loading ? (<i className="fa-solid fa-spinner fa-spin"></i>) : ("Login")}
          </button>
          <p>
            <Link to={"/forgetpassword"}  className="text-muted forgot btn">I Forgot My Password</Link>
          </p>
          <Link className="btn btn-default-outline" to="/register">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
