import React from "react";
import "./Home.scss"
import Footer from "../Footer/Footer"
import FooterButton from "../Footer/FooterButton/FooterButton";

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
                    <div className="grid-wrapper">
                        <div className="col-md-3 small-card"><div className="small-card-content">asd</div></div>
                        <div className="col-md-3 small-card"><div className="small-card-content">asd</div></div>
                        <div className="col-md-3 small-card"><div className="small-card-content">asd</div></div>
                        <div className="col-md-3 small-card"><div className="small-card-content">asd</div></div>
                        <div className="col-md-12 big-card"><div className="big-card-content">panjang</div></div>
                        <div className="slider-container">
                            <div className="col-md-2 medium-card a">slidera</div>
                            <div className="col-md-2 medium-card b">sliderb</div>
                            <div className="col-md-2 medium-card c">sliderc</div>
                            <div className="col-md-2 medium-card d">sliderd</div>
                            <div className="col-md-2 medium-card e">slidere</div> 
                            <div className="col-md-2 medium-card f">sliderf</div>                        
                        </div>
                    </div>
                </div>
                <Footer />
                <FooterButton />
            </div>
        )
    }
}