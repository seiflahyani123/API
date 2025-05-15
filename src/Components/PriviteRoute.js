import React from 'react'
import { Navigate } from 'react-router-dom'

const PriviteRoute = ({aa ,children}) => {
  return (
    <div>
      {
        aa ? <div>{children}</div> : <Navigate to="/" />
      }
    </div>
  )
}

export default PriviteRoute
