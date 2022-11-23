import React, { Component } from 'react';
import './home.css'
import Footer from './footer';



class Home extends Component{
    render(){
        return(
            <div className='home'>
                <div className='home-header'>
                    <div className='home-btn1'></div>
                    <div className='home-btn2'></div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home