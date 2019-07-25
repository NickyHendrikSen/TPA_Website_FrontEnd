import React from "react";
import "./Home.scss"
// import {Link} from "react-router-dom"
// import downArrow from "./img/down-chevron.png"
// import plusLogo from "./img/plusLogo.png"
import HomeHeader from "./HomeHeader/HomeHeader"
import HomeContents from "./HomeContents/HomeContents"
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import FooterButton from "../Footer/FooterButton/FooterButton";

export default class Home extends React.Component{
    // constructor(props : any){
    //     super(props);
    // }
    render()
    {
        return(
            <div className="wrapper">
                <Header />
                <div className="header-contents">
                    <HomeHeader />
                </div>

                <div className="bottom-contents">
                    <HomeContents/>
                </div>
            </div>
        )
    }
}