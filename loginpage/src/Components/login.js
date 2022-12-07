import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")

   const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("UserName", name);
        localStorage.setItem("Password", password);
        navigate("/todo")
    }
  return (

    <div>
        <h4>Login Form</h4>
        <form onSubmit={handleSubmit}>
            <label>User Name:</label>
            <input type="text" placeholder='UserName' name="UserName" value={name} onChange={(e)=> setName(e.target.value)}/>
            <br></br>
            <label>Password:</label>
            <input type="password" placeholder='Password' name='Password' value={password} onChange={(e)=>setPassword(e.target.value) }/>
            <button>Login</button>
        </form>
    </div>
  )
}
