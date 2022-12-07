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

function Logout(props) {
    return <button onClick={props.Clickinfo}>Logout</button>;
}

class Conditional extends Component {
    constructor(props){
        super(props)
        this.handledLogIn = this.handledLogIn.bind(this);
        this.handledLogOut = this.handledLogOut.bind(this);
        this.state = {isLoggedIn: false}
    }

    handledLogIn(){
        this.setState({isLoggedIn: true})
    }

    handledLogOut() {
        this.setState({isLoggedIn: false})
    }
    render() {
        return(
            <div>
                <h2>Conditional Rendering Example</h2>
                <Message isLoggedIn = {this.state.isLoggedIn}/>
                {
                    (this.state.isLoggedIn) ?
                    (<Logout Clickinfo = {this.handledLogOut}/>) :
                    (<LogIn Clickinfo = {this.handledLogIn}/>)

                }
            </div>
        );
    }
}


export default Conditional