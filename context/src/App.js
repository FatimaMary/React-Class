import React from 'react';
import './App.css';

const MyContext = React.createContext('');
class App extends React.Component{
  
  render() {
    return(
      <div>
        <MyContext.Provider value='Fatima'>
          <Name/>
        </MyContext.Provider>
      </div>
    )
  }
}

function Name(props) {
  return(
    <div>
      <ChangeName/>
    </div>
  )
}

class ChangeName extends React.Component {
  static contextType = MyContext;
  render(){
    return(
      <h1>{this.context}</h1>
      // <button theme={this.context}>change</button>
    )
  }
}
export default App;
