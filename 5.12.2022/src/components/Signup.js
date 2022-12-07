import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

   const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("UserName", name);
        localStorage.setItem("Mobile", mobile);
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", password);
        navigate("/signin")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}  className='signup'>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>
        <label className='name-input'><b>User Name</b></label>
        <input className='name-input' type="text" placeholder='UserName' name="UserName" value={name} onChange={(e)=> setName(e.target.value)}  required/>
        <label ><b>Mobile Number</b></label>
        <input type="text" placeholder="Enter Mobile Number" name="mobilenumber" value={mobile} onChange={(e)=>setMobile(e.target.value)} required></input>
        <label ><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}  required/>
        <label ><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e)=>setPassword(e.target.value) }  required/>
        <button className='signup-btn'>SignUp</button>
        </form>
    </div>
  )
}
