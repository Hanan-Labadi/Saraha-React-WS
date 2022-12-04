import React from 'react'

function ReceivedCode() {
  return (
    <div className="container text-center my-5">
    <div className="user my-3">
      <i className="fas fa-user-secret user-icon" />
      <h4 className="login">update my password</h4>
    </div>

    <div className="card p-5 w-50 m-auto">
      <form method="POST" action="/handleLogin">
        <input
          className="form-control"
          placeholder="Enter Your Email"
          type="text"
          name="email"
        />

        <input
          className="form-control"
          placeholder="Enter your  Code"
          
          type="text"
          name="email"
        />

        <input
          className="form-control"
          placeholder="Enter your new Password"
          type="text"
          name="email"
        />
        <button  className="btn btn-default-outline my-4 w-100 rounded" type="submit"> update your Password </button>
      </form>
    </div>
  </div>
  )
}

export default ReceivedCode