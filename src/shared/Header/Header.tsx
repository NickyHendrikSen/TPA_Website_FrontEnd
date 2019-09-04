import React, { Component } from "react";
import "./Header.scss"
import logo from "./img/logo.png"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import search_select from "./img/search_select.png"
import SignUp from "./SignEmail/SignEmail"
import Login from "./Login/Login"
import "../Home/HomeContents/GridSystem/GridSystems.scss"

export default class Header extends React.Component{
    logout(){
        localStorage.setItem('UserID', "");
        localStorage.setItem('UserURL', "");
        (document.getElementById('login_header') as HTMLElement).style.display = "block";
        (document.getElementById('signup_header') as HTMLElement).style.display = "block";
        (document.getElementById('logout_header') as HTMLElement).style.display = "none";
        (document.getElementsByClassName('menu_picture')[0] as HTMLElement).style.display = "none";
        (document.getElementsByClassName('menu_logged')[0] as HTMLElement).style.display = "none";
        (document.getElementById('plan_header') as HTMLElement).style.display = "none";
    }
    lightBox_reg_show(){
        var lightBox = document.getElementsByClassName("regE_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;
        lightBox[0].style.display = "flex";
        console.log(lightBox[0]);   
        var body = document.getElementsByTagName("Body")[0] as HTMLElement;
        // body.style.position="fixed";
        // lightBox[0].style.position = "absolute";
    }    
    lightBox_login_show(){
        var lightBox = document.getElementsByClassName("login_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;
        lightBox[0].style.display = "flex";
        console.log(lightBox[0]);   
        var body = document.getElementsByTagName("Body")[0] as HTMLElement;
        // body.style.position="fixed";
    }
    Header_ShowPick(){
        var pickBlock = document.getElementsByClassName("Header_Search_PickWrapper")[0] as HTMLElement;
        // pickBlock.style.display = "block";
        pickBlock.style.width = "534px";
        pickBlock.style.opacity = "1";
        // pickBlock.style.visibility = "visible";
    }
    Header_hidePick(){
        var pickBlock = document.getElementsByClassName("Header_Search_PickWrapper")[0] as HTMLElement;
        // pickBlock.style.display = "none";
        pickBlock.style.width = "0px";
        pickBlock.style.opacity = "0";
        // pickBlock.style.visibility = "hidden";
    }
    render(){
        return(
            <header className="col-md-12">
                <div className="navBar">
                    <div className="logo">
                        <Link to="/">
                            <div className="aiv-logo"></div>
                        </Link>
                    </div>
                    <div className="Header_SearchInput">
                        <div className="header-search-wrapper">
                            {/* <img src={search_select} alt=""/> */}
                            <div className="magnifier fas fa-search"></div>
                            <input type="search" name="" id="" className="HeaderSearch" placeholder='Try "THIS"'
                            onBlur={this.Header_hidePick} onFocus={this.Header_ShowPick}/>
                        </div>
                    </div>
                    <div className="Header_Search_PickWrapper">
                        <div className="Header_Search_PickText">
                            EXPLORE AIRBNB
                        </div>
                        <div className="Header_Search_PickContent">
                            <Link to="/Places"><button>All</button></Link>
                            <button>Stays</button>
                            <Link to="/Experiences"><button>Experiences</button></Link>
                            <button>Restaurants</button>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu_picture">
                            <img src="" alt="" className="menu_pictureImg"/>
                        </div>
                        <button id="login_header" onClick={this.lightBox_login_show}>Log in</button>
                        <button id="signup_header" onClick={this.lightBox_reg_show}>Sign up</button>
                        <button id="logout_header" onClick={this.logout}>Log out</button>
                        <button>Help</button>
                        <Link to="become-a-host/room"><button className="menu_logged">Become a host</button></Link>
                        <Link to="PlanList"><button id="plan_header">Plan List</button></Link>
                    </div>
                </div>
                <SignUp />
                <Login />
            </header>
        )
    }
}