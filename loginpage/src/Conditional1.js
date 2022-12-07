import React, { Component } from 'react'


function UserLogIn(props) {
    return (
        <h1>Welcome Back!</h1>
    );
}

function GuestLogIn(props) {
    return (
        <h2>Please Sign Up!!</h2>
    )
}

function SignUp(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn){
        return <UserLogIn/>
    }
    else{
        return<GuestLogIn/>
    }
}

export default SignUp