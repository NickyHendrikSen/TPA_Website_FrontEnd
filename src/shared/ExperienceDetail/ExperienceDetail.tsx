import React from "react"
import Header from "../Header/Header"
import "./ExperienceDetail.scss"
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

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}