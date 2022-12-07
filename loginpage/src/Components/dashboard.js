import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState();

    const checkFun = () => {
        if(userName === localStorage.getItem("UserName")){
            (navigate("/todo"));
        } else {
            alert("First Login the page ")
            navigate("/login");
        }
    }
  return (
    <div>
        <input type="text" placeholder='Enter User Name' value={userName} onChange={(e)=> setUserName(e.target.value)}/>
        <button onClick={checkFun}>Submit</button>
        {/* <p>Welcome {localStorage.getItem("UserName")}</p> */}
    </div>
  )
}
