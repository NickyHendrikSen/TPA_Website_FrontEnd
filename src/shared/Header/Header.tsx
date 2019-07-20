import React, { Component } from "react";
import "./Header.scss"
import logo from "./img/logo.png"
// import {BrowserRouter as Router, Route, Link} from "react-router-dom"

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="navBar">
                    <div className="logo">
                        <img src={logo} alt="image not found"/>
                    </div>
                    <div className="menu">
                        <button>Log in</button>
                        <button>Sign up</button>
                        <button>Help</button>
                        <button>Become a host</button>
                    </div>
                </div>
            </header>
        )
    }
}