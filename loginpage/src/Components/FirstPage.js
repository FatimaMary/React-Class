import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FirstPage() {
  const navigate = useNavigate();

  const LoggingOut = () =>{
    navigate("/dashboard");
  }
  return (
    <div>
      <p>Welcome {localStorage.getItem("UserName")}</p>
      <button onClick={LoggingOut}>LogOut</button>
    </div>
  )
}
