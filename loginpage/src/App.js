import React from 'react';
import './App.css';
import Application from './Application';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name=target.name;
      this.setState({[name]:value
    });
  }
  render(){
    return(
      <div>
        <Application/>
        <h2>Login</h2>
        <label>User Name</label>
        <input type="text" name='userName' placeholder='Enter the User Name' value={this.state.userName} onChange={this.handleChange}/>
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter your Password here" value={this.state.password}onChange={this.handleChange}/>
      </div>
    )
  }
}

export default App;
