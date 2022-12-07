// import React from 'react';
// import './App.css';
// import {Route, BrowserRouter as Router, Navigate} from 'react-router-dom'
// import Application from './Application';


// const navigate = useNavigate();


// function LoginForm() {

//   <Navigate to = "/Application" replace={true} />
//     // <Route exact path='/application' Component={Application}/>
//   console.log("login successfully");
//   // return <Application/>;
// }

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       userName: "",
//       password: "",
//       correctUserName: "selvi",
//       correctPassword: "12345"
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name=target.name;
//       this.setState({[name]:value
//     });
//   }

//   handleSubmit(event) {
//     if(this.state.userName === this.state.correctUserName && this.state.password === this.state.correctPassword){
//       return <Navigate replace={true} to="Application" />   
//     } else {
//       console.log("not permitted")
//     }

//   }
//   render(){
//     return(
//       <div>
//         {/* <Application/> */}
//         <h2>Login</h2>
//         <label>User Name</label>
//         <input type="text" name='userName' placeholder='Enter the User Name' value={this.state.userName} onChange={this.handleChange}/> 
//         <label>Password</label>
//         <input type="password" name="password" placeholder="Enter your Password here" value={this.state.password}onChange={this.handleChange}/>
//         <button onClick={this.handleSubmit}>Login</button>
//       </div>
//     )
//   }
// }

// export default App;

import React from "react";
import List from "./list";
import Login from './Components/login';
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import Dashboard from "./Components/dashboard";
// import FirstPage from "./Components/FirstPage";
import Todo from "./Components/Todo";

function App() {
  return(
    <div>
      <BrowserRouter>
        <Router>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App;