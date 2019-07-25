import React from "react"
import "./Experience.scss"
import ExperienceHeader from "./ExperienceHeader/ExperienceHeader"
import Map from "../Map/Map"
import oldtown from "./img/oldtown.jpg"
import stars from "./img/stars.png"
import heart from "./img/heart.png"
import {Link} from "react-router-dom"

export default class Experience extends React.Component{
    render(){
        return(
            <div className="exps_Wrapper">
                <div className="exps_Content">
                {/* Card Wrapper */}
                    <div className="exps_CardWrapper">
                        <div className="exps_Card">
                            <div className="exps_CardImage">
                                <Link to="/ExperiencesDetail"><img src={oldtown} alt=""/></Link>
                                <img src={heart} alt="" className="exps_CardLove"/>
                            </div>
                            <div className="exps_CardInformation">
                                <div className="exps_CardLocation">
                                    photo shoot · Tamansari
                                </div>
                                <div className="exps_CardTitle">
                                    Capture Memories at Jakarta Old Town
                                </div>
                                <div className="exps_CardDescription">
                                    <li className="exps_CardPrice">$48 per person</li>
                                    <li className="exps_CardTime">2 hours</li>
                                    <li className="exps_CardBenefit">Transportation, Drinks, 1 ticket included</li>
                                </div>
                                <div className="exps_CardRating">
                                    5.0 
                                    <img src={stars} alt=""/>
                                    <span className="exps_CardRatingResponds">(20)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}