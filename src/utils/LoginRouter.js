import React from 'react'
import { Navigate } from 'react-router-dom'

const LoginRoute = (props) => {
  
  if (JSON.parse(localStorage.getItem('userLogin'))?.email) {
    return <Navigate to='/' />
  }

  return (props.children)
  
}

export default LoginRoute
