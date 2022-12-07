import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Register/>
      <Login/>
      <Home/>
    </div>
  );
}

export default App;
