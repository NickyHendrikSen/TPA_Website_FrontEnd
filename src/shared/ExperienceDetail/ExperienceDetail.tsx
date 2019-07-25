import React from "react"
import Header from "../Header/Header"
import InstaStory from "./InstaStory/InstaStory"

export default class ExperienceDetail extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <div className="expD_ContentWrapper">
                    <div className="expD_Content">
                        <InstaStory />
                    </div>
                </div>
            </div>
        )
    }
}