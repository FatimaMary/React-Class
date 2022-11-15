import React from 'react';
import Home from './Components/home';
import './App.css';
// import Footer from './Components/footer';
import { Route, Routes, BrowserRouter} from 'react-router-dom' ;
import Category from './Components/category';
import Account from './Components/account';
import ShoppingCart from './Components/cart';
import Footer from './Components/footer';

function App() {
  return (
    <div className="app">
      {/* <h1>Welcome</h1> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><h1>Welcome</h1>
        <Footer></Footer></div>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Category" element={<Category/>}/>
        <Route path="/account"element={<Account/>}/>
        <Route path="/cart" element={<ShoppingCart/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

// class App extends React.Component{
//   render() {
//     return(
//       <div className='App'>
//         <Home/>
//         <Category/>
//         <Account/>
//         <ShoppingCart/>
//       </div>
//     )
//   }
// }


export default App;
