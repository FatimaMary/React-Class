import React ,{ Component } from 'react';
import Data from './Components/data';
import './App.css';


class App extends React.Component{
  render() {
    return(
      <div className='app'>
        {/* <h1 className='app-header'>My data</h1>
        <table className='app-table'>
          <tr>
            <td>Name:</td>
            <td>{this.props.name}</td>
          </tr>
          <tr>
            <td>Date of Birth:</td>
            <td>{this.props.dob}</td>
          </tr>
          <tr>
            <td>Qualification:</td>
            <td>{this.props.study}</td>
          </tr>
          <tr>
            <td>Major Subject:</td>
            <td>{this.props.branch}</td>
          </tr>
        </table> */}
        <Data />
      </div>
    );
  }
}

App.defaultProps = {
  name: "A.Fatima Mary",
  dob: "09.08.1992",
  study: "M.Sc.,M.phil",
  branch: "Mathematics"
}
export default App;
