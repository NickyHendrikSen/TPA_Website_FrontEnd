import React, { Component } from "react";
import "./Header.scss"
import logo from "./img/logo.png"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import search_select from "./img/search_select.png"

export default class Header extends React.Component{
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