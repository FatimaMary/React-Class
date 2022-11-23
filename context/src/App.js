import React from 'react';
import './App.css';
import { MyContext } from './Components/context';
// import ChangeName from './Components/component1';
import Name from './Components/name';


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      name: `Fatima`
    }
  }

  // sName = () => {
  //   this.setState({sName: `Mary`})
  // }
  
  render() {
    return(
      <div>
        <MyContext.Provider value={{name:this.state.name }}>
          <Name name={this.state.name}/>
        </MyContext.Provider>
      </div>
    )
  }
}






// class ChangeName extends React.Component {
//   static contextType = MyContext;
//   render(){
//     return(
//       <h1>{this.context}</h1>
//     )
//   }
// }
export default App;
