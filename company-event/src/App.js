import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  
  this.state = {
    userName: "",
    password: ""
  };
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

    handleSubmit(event) {
      alert("Successfully Submited your form " + this.state.userName+" "+this.state.password);
      event.preventdefault()
    }
  

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} method="POST">
        <h2 >Login Form</h2>
        <label htmlFor='name'>User Name:</label>
        <input type="text"  name="userName" value={this.state.userName} onChange={this.handleChange}/>
        <label>Password:</label>
        <input type="date" name="password" value={this.state.password} onChange={this.handleChange}/>
        <button type='submit' value="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App