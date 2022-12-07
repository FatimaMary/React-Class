import './App.css';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Todo from './components/Todo';
import Signin1 from './components/Signin1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Signin1/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
