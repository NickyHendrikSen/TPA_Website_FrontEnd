import React, { Component } from "react";
import "./Header.scss"
import logo from "./img/logo.png"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import search_select from "./img/search_select.png"
import SignUp from "./SignEmail/SignEmail"
import Login from "./Login/Login"

export default class Header extends React.Component{
    lightBox_reg_show(){
        var lightBox = document.getElementsByClassName("regE_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;
        lightBox[0].style.display = "flex";
        console.log(lightBox[0]);   
        var body = document.getElementsByTagName("Body")[0] as HTMLElement;
        body.style.position="fixed";
    }    
    lightBox_login_show(){
        var lightBox = document.getElementsByClassName("login_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;
        lightBox[0].style.display = "flex";
        console.log(lightBox[0]);   
        var body = document.getElementsByTagName("Body")[0] as HTMLElement;
        body.style.position="fixed";
    }

    render(){
        return(
            <header>
                <div className="navBar">
                    <div className="logo">
                    <Router>
                        <Link to="/"><img src={logo} alt="image not found"/></Link>
                    </Router>
                    </div>
                    <div className="Header_SearchInput">
                        <img src={search_select} alt=""/>
                        <input type="search" name="" id="" className="HeaderSearch" placeholder='Try "THIS"'/>
                    </div>
                    <div className="menu">
                        <button onClick={this.lightBox_login_show}>Log in</button>
                        <button onClick={this.lightBox_reg_show}>Sign up</button>
                        <button>Help</button>
                        <button>Become a host</button>
                    </div>
                </div>
                <SignUp />
                <Login />
            </header>
        )
    }
}