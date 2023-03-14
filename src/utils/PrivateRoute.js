import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {

  if (!JSON.parse(localStorage.getItem('userLogin'))?.email ) {
    return <Navigate to='/login' />
  }
  
  return (
    props.children
  )
}

export default PrivateRoute
