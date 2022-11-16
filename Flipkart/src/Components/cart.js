import React from 'react'
import Footer from './footer'


class ShoppingCart extends React.Component{
    render(){
        return(
            <div className='cart'>
                <h1>You Clicked Shopping Cart</h1>
                <Footer/>
            </div>
        )
    }
}

export default ShoppingCart