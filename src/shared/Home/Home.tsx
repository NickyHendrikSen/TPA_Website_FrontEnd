import React from "react";
import "./Home.scss"
import Footer from "../Footer/Footer"
import FooterButton from "../Footer/FooterButton/FooterButton";
import HomeContents from "../HomeContents/HomeContents"

export default class Home extends React.Component{
    render()
    {
        return(
            <div className="wrapper">
                <div className="header-contents">
                    <div className="description">
                        Introducing Aivbnb.com
                    </div>
                </div>
                <div className="bottom-contents">
                    <HomeContents/>
                </div>
                <Footer />
                <FooterButton />
            </div>
        )
    }
}