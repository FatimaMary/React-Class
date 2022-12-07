import React, { useState } from 'react';
import Form from './Components/Form'
import { Provider } from './Components/Context';
import './App.css';
import { MyContext } from './Components/Context';
// import ChangeName from './Components/component1';
import Name from './Components/name';


// class App extends React.Component{
//   constructor() {
//     super();
//     this.state = {
//       name: `Fatima`
//     }
//   }

//   // sName = () => {
//   //   this.setState({sName: `Mary`})
//   // }
  
//   render() {
//     return(
//       <div>
//         <MyContext.Provider value={{name:this.state.name }}>
//           <Name name={this.state.name}/>
//         </MyContext.Provider>
//       </div>
//     )
//   }
// }


// function App() {
//   const [name, setName] = useState('Fatima');
//   const changeName = () =>{
//     setName('Mary')
//   }
//   return (
//     <div>
//     <button onClick={changeName}>Clickme</button>
//     <Provider value = {name}>
//         <Form />
//     </Provider>
//     </div>
//   )

// }

function App() {
  const [name, setName] = useState('');
  const handleSubmit = ()=>{
      setName(name)
  };
  return(
    <div>
      <input type="name" value={name} onChange={(e)=> setName(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
      <Provider value = {name}>
        <Form/>
      </Provider>
    </div>
  );
}


export default App;
