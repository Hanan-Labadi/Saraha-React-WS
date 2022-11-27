import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


function Protected({loginData}) {
  return (
    <>
    {loginData?<Outlet/>:<Navigate to='login'/>}
    </>
  )
}

export default Protected