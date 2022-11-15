import React, { Component } from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Home from "./home";
import { useNavigate } from "react-router-dom";


function Footer() {
    const navigate = useNavigate();

    function toHome() {
        navigate("/home");
    }
    function toMenu() {
        navigate("/category");
    }
    function toAccount() {
        navigate("/account")
    }
    function toCart() {
        navigate("/cart");
    }
        return (
            <div>
                <div className="footer">
                    <HomeIcon onClick={toHome}></HomeIcon>
                    <MenuIcon onClick={toMenu}></MenuIcon>
                    <AccountCircleIcon onClick={toAccount}></AccountCircleIcon>
                    <ShoppingCartIcon onClick={toCart}></ShoppingCartIcon>
                </div>
            </div>
        )
}


export default Footer