import React, { Component } from "react";
import "./Header.scss"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import SignUp from "./SignEmail/SignEmail"
import Login from "./Login/Login"
import "../Home/HomeContents/GridSystem/GridSystems.scss"
import Axios from "axios"

export default class Header extends React.Component{

    state = {
        language:[{
            languageName:'',
            code:'',
        }],
        currency:[{
            symbol: '',
            name: '',
            symbol_native: '',
            decimal_digits: '',
            rounding: '',
            code: '',
            name_plural: ''
        }],
        exchange_rate:{
            base: '',
            date: '',
            rates: [{CAD:0},{HKD:0},{ISK:0},{PHP:0},{DKK:0},{HUF:0},{CZK:0},{GBP:0},{RON:0},{SEK:0},{IDR:0},{INR:0},{BRL:0},{RUB:0},{HRK:0},{JPY:0},{THB:0},{CHF:0},{EUR:0},{MYR:0},{BGN:0},{TRY:0},{CNY:0},{NOK:0},{NZD:0},{ZAR:0},{USD:0},{MXN:0},{SGD:0},{AUD:0},{ILS:0},{KRW:0},{PLN:0}]
        }
    }

    componentWillMount(){
        Axios.all([
            Axios.get('https://api.myjson.com/bins/13i713'),
            Axios.get('https://api.myjson.com/bins/ns7n7'),
            Axios.get('https://api.exchangeratesapi.io/latest?base=USD')
        ])
            .then(Axios.spread((currencyRes:any, langRes:any, exchangeRes:any)=>
            {
                this.setState({
                    currency:currencyRes.data,
                    language:langRes.data,
                    exchange_rate:exchangeRes.data
                })   
            }))
    }

    logout(){
        localStorage.setItem('UserID', "");
        localStorage.setItem('UserURL', "");
        (document.getElementById('login_header') as HTMLElement).style.display = "block";
        (document.getElementById('signup_header') as HTMLElement).style.display = "block";
        (document.getElementById('logout_header') as HTMLElement).style.display = "none";
        (document.getElementsByClassName('menu_picture')[0] as HTMLElement).style.display = "none";
        (document.getElementsByClassName('menu_logged')[0] as HTMLElement).style.display = "none";
        (document.getElementById('plan_header') as HTMLElement).style.display = "none";
        window.location.reload();
    }
    lightBox_reg_show(){
        var lightBox = document.getElementsByClassName("regE_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;
        lightBox[0].style.display = "flex";
        // console.log(lightBox[0]);   
        var body = document.getElementsByTagName("Body")[0] as HTMLElement;
        // body.style.position="fixed";
        // lightBox[0].style.position = "absolute";
    }    
    lightBox_login_show = () => {
        var lightBox = document.getElementsByClassName("login_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;
        lightBox[0].style.display = "flex";
        // console.log(lightBox[0]);   
        var body = document.getElementsByTagName("Body")[0] as HTMLElement;
        // body.style.position="fixed";
    }
    Header_ShowPick(){
        var pickBlock = document.getElementsByClassName("Header_Search_PickWrapper")[0] as HTMLElement;
        // pickBlock.style.display = "block";
        pickBlock.style.width = "534px";
        pickBlock.style.display = "block";
        setTimeout(function(){ 
            pickBlock.style.opacity = "1"; }, 100);
        // pickBlock.style.visibility = "visible";
    }
    Header_hidePick(){
        var pickBlock = document.getElementsByClassName("Header_Search_PickWrapper")[0] as HTMLElement;
        pickBlock.style.width = "0px";
        pickBlock.style.opacity = "0";
        setTimeout(function(){ pickBlock.style.display = "none"; }, 500);
        // pickBlock.style.visibility = "hidden";
    }

    changeCurrency(index:number, currency_code:string){
        console.log(""+index+", code: "+currency_code);
    }

    changeLanguage(index:number, language_code:string){
        console.log(""+index+", code: "+language_code);
    }

    showLangList(){
        let language = document.getElementsByClassName('language') as HTMLCollectionOf<HTMLElement>
        
        if(language[0].style.display === "none")
            language[0].style.display = "block"
        else
            language[0].style.display = "none"        
    }

    showCurrList(){
        let currency = document.getElementsByClassName('currency') as HTMLCollectionOf<HTMLElement>
        
        if(currency[0].style.display === "none")
            currency[0].style.display = "block"
        else
            currency[0].style.display = "none"

    }
    render(){
        const {currency, language} = this.state
        const allLanguages = language.map((lang, index) => {
            return(
                <div key={index} className="popup-list" onClick={()=>this.changeLanguage(index, lang.code)}>{lang.code} • {lang.languageName}</div>
            )
        })
        const allCurrencies = currency.map((curr, index) => {
            return(
                <div key={index} className="popup-list" onClick={()=>this.changeCurrency(index, curr.code)}>{curr.symbol} • {curr.name}</div>
            )
        })
        const log = document.getElementsByClassName('col-md-12');

        document.addEventListener('keydown', logKey);
        
        function logKey(e : any) {
            if(e.keyCode == 13){
                if(localStorage.getItem('UserID') == null || localStorage.getItem('UserID') == "")
                {
                    var lightBox = document.getElementsByClassName("login_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;
                    lightBox[0].style.display = "flex";
                    var body = document.getElementsByTagName("Body")[0] as HTMLElement;
                    return;
                }
                    window.location.href = "/Experiences"
            }
        }
        // var urlPhoto = "http://" + require(localStorage.getItem("UserURL") + "");
        return(
            <header className="col-md-12">
                {/* {console.log(urlPhoto)} */}
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
                            <Link to="/Places/Australia"><button>All</button></Link>
                            <Link to="/Places/Australia"><button>Stays</button></Link>
                            <Link to="/Experiences"><button>Experiences</button></Link>
                            <button>Restaurants</button>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="popup-list-wrapper">
                            <div className="buttons btn-language" onClick={this.showLangList}>
                                language
                            </div>
                            <div className="popup-list-container language">
                                <div className="list-wrapper">
                                    {allLanguages}
                                </div>
                            </div>
                        </div>
                        <div className="popup-list-wrapper">
                            <div className="buttons btn-currency" onClick={this.showCurrList}>
                                Currency
                            </div>
                            <div className="popup-list-container currency">
                                <div className="list-wrapper">
                                    {allCurrencies}
                                </div>
                            </div>
                        </div>
                        <button className="buttonRight" id="login_header" onClick={this.lightBox_login_show}>Log in</button>
                        <button className="buttonRight" id="signup_header" onClick={this.lightBox_reg_show}>Sign up</button>
                        <button className="buttonRight" id="logout_header" onClick={this.logout}>Log out</button>
                        <button className="buttonRight">Help</button>
                        <Link to="become-what"><button className="menu_logged">Become a host</button></Link>
                        <Link to="PlanList"><button id="plan_header">Plan List</button></Link>
                        <div className="menu_picture"onClick={() => window.location.href="/Profile"}>
                            <img src={"http://" + localStorage.getItem('UserURL')} className="menu_pictureImg"/>
                        </div>
                    </div>
                </div>
                <SignUp />
                <Login />
            </header>
        )
    }
}