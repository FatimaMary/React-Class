import React, { Component } from 'react'

function Message(props) {
    if(props.isLoggedIn){
        return<h2>Welcome Back!</h2>;
    } else {
        return <h3>Please Login first!!!</h3>
    }
}

function LogIn(props) {
    return <button onClick={props.Clickinfo}>Login</button>;
}

class Conditional extends Component {
    constructor(props){
        super(props)
        this.handledLoggedIn = this.handledLoggedIn.bind(this);
        this.handledLoggrdOut = this.handledLoggrdOut.bind(this);
        this.state = {isLoggedIn: false}
    }

    handledLoggedIn(){
        this.state({isLoggedIn: true})
    }

    handledLoggedOut() {
        this.state({isLoggedIn: false})
    }
    render() {
        return(
            <div>
                <h2>Conditional Rendering Example</h2>
                <Message isLoggedIn = {this.state.isLoggedIn}/>
                {
                    (this.state.isLoggedIn) ?
                    (<Logout Clickinfo = {this.handledLoggedOut}/>) :
                    (<LogIn Clickinfo = {this.handledLoggedIn}/>)

                }
            </div>
        );
    }
}


export default Conditional