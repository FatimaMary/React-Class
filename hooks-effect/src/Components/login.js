import React, { useState } from 'react';


function login(){
    const [user, setUser] = useState({})
    const [password, setPassword] = useState("")


    return(
        <div>
            <h2>Login Form</h2>
            <br/>
            <label>UserName: </label>
            <input type='name' placeholder='Enter the user name'/>
            <label>password: </label>
            <input type='password' placeholder='Enter the password'/>
            <button>Submit</button>
        </div>
    )
}