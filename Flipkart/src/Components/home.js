import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Footer from './footer';



class Home extends Component{
    render(){
        return(
            <div className='home'>
                <h1>You Clicked Home Button</h1>
                <Footer/>
            </div>
        );
    }
}

export default Home