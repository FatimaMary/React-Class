import React from 'react';
// import Header from './Components/Header';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "A.Fatima Mary",
      dob: "09.08.1992",
      qualification: "M.Sc.,M.Phil.,",
      branch: "Mathematics",
      experience: "6 years",
      hobby: "Singing, Playing",
      native: "Sivakasi",
      religion: "Christian",
      cell: 9750215699
      }
  }
  render() {
    return (
      <Resume name = {this.state.name}
      dob = {this.state.dob}
      qualification = {this.state.qualification}
      branch = {this.state.branch}
      experience = {this.state.experience}
      hobby = {this.state.hobby}
      native = {this.state.native}
      religion = {this.state.religion}
      cell = {this.state.cell}
      />
    )
  }
}

class Resume extends React.Component {
  render(){
    return (
      <div>
        <h1>My Data</h1>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>DOB: {this.props.dob}</li>
          <li>Educational Qualification: {this.props.qualification}</li>
          <li>Major Subject: {this.props.branch}</li>
          <li>Working Experience: {this.props.experience}</li>
          <li>Hobbies: {this.props.hobby}</li>
          <li>Native Place: {this.props.native}</li>
          <li>Religion: {this.props.religion}</li>
          <li>Contact No.: {this.props.cell}</li>
        </ul>
      </div>
      )
  }
  
}

export default App;
