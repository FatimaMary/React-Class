// import { getAuth, signInWithPhoneNumber } from "firebase/auth";

// const phoneNumber = getPhoneNumberFromUserInput();
// const appVerifier = window.recaptchaVerifier;

// const auth = getAuth();
// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//     });

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === localStorage.getItem("Password")){
            navigate("/todo");
        } else {
            navigate("/signup");
        }
        // localStorage.setItem("Mobile", mobile);
        // localStorage.setItem("Password", password);
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="signup">
            <h3>Sign In</h3>
            <label ><b>Mobile Number</b></label>
            <input type="text" name="mobilenumber" value={localStorage.getItem("Mobile")} onChange={(e)=>setMobile(e.target.value)} ></input>
            <label ><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
            <button className='signup-btn'>SignIn</button>
        </form>
    </div>
  )
}
