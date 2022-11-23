import React, { Component } from 'react';

class Application extends Component {
  constructor(props) {
    super(props);
  
  this.state = {
    fullName: "",
    dob: "",
    father: "",
    mother: "",
    studies: "",
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
      document.write(this.state.fullName + " " + "Successfully Submited your form ");
      event.preventdefault()
    }
  

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <table>
            <th><h2 >Login Form</h2></th>
            <tr>
              <td><label >Name:</label></td>
              <td><input type="text"  name="fullName" value={this.state.fullName} onChange={this.handleChange}/></td>
            </tr>
            <tr>
              <td><label >Date of Birth:</label></td>
              <td><input type="date" name="dob" value={this.state.dob} onChange={this.handleChange}/></td>
            </tr>
            <tr>
              <td><label >Father Name:</label></td>
              <td><input type="text" name="father" value={this.state.father} onChange={this.handleChange}/></td>
            </tr>
            <tr>
              <td><label >Mother Name:</label></td>
              <td><input type="text" name="mother" value={this.state.mother} onChange={this.handleChange}/></td>
            </tr>
            <tr>
              <td><label >Qualification:</label></td>
              <td><input type="text" name="studies" value={this.state.studies} onChange={this.handleChange}/></td>
            </tr>
          </table>
          <button type='submit' value="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Application