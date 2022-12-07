import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signin1() {
    const [mobile, setMobile] = useState();
    const navigate = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault();
            if (mobile === localStorage.getItem("Mobile")){
                navigate("/signin");
            } else {
                navigate("/signup");
            }
        }
  return (
    <div>
    <form onSubmit={handleSubmit} className="signup">
        <h3>Sign In</h3>
        <label ><b>Mobile Number</b></label>
        <input type="text" placeholder="Enter Mobile Number" name="mobilenumber" value={mobile} onChange={(e)=>setMobile(e.target.value)} required></input>
        <button className='signup-btn'>Enter</button>
    </form>
    </div>
  )
}
