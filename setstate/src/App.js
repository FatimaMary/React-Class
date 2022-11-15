import React, { Component } from 'react';
import FindDom from './components/finddom';


class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     msg: "Hai Everyone!"
  //   };
  //   this.updateSetState = this.updateSetState.bind(this);
  // }

  // updateSetState() {
  //   this.setState({
  //     msg: "Welcome to all!"
  //   });
  // }
  render() {
    return(
      <div>
        {/* <h1>{this.state.msg}</h1>
        <button onClick={this.updateSetState}>Change</button> */}
        <FindDom /> 
      </div>
      
    )
  }
}

export default App