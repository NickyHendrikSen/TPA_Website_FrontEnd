import React from "react"
import Header from "../Header/Header"
import "./ExperienceDetail.scss"
import "react-fa-icon"
import photo from "./img/oldtown.jpg"
import InstaStory from "./InstaStory/InstaStory"

export default class ExperienceDetail extends React.Component{
    render(){
        return(
            <div className="expD_Wrapper">
                <Header />
                <div className="expD_ContentWrapper">
                    <div className="expD_Content">
                        <div className="expD_Insta">
                        <InstaStory />
                        </div>
                        <div className="expD_Description">
                            <div className="expD_header">
                                <div className="expD_theme">
                                photo shoot
                                </div>
                                <div className="expD_title">
                                Capture Memories at Jakarta Old Town
                                </div>
                                <div className="expD_location">
                                    <i className="fas fa-map-marker-alt">
                                    <span>TamanSari</span></i>
                                </div>
                                <div className="expD_time">
                                    <i className="fas fa-clock"><span>2 Hours total</span></i>
                                </div>
                                <div className="expD_benefit">
                                    <i className="fa fa-list-alt"><span>Drinks, 1 ticket and Transportation</span></i>
                                </div>  
                                <div className="expD_language">
                                    <i className="fas fa-comments"><span>Offered in English</span></i>
                                </div>  
                            </div>
                            <hr/>
                            <div className="expD_aboutWrapper">
                                <div className="expD_about">
                                    <div className="expD_aboutTitle">About your host</div>
                                    <div className="expD_aboutDescription">I'm a professional photographer based in Jakarta. I’ve been doing photography for almost five years and I enjoy capturing moments, landscapes, and also products, with my camera. I love taking portrait pictures of people, especially when they’re on vacation and I can capture their happiest moments. It would be my pleasure to accompany you on your trip and be your personal photographer while you’re enjoying your vacation. Lets snap your happiest moments in Kota Tua Jakarta in a picture so you can share them with your loved ones.</div>
                                </div>
                                <div className="expD_about_img">
                                    <img src={photo} alt=""/>
                                    <div className="expD_about_name">
                                    Nicky
                                    </div>
                                    <div className="expD_about_contact">
                                    Contact Host
                                    </div>
                                </div>
                                <div className="expD_do">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}