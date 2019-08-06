import React from "react"
import "./BeHost_Room.scss"
import logo from "./img/logo.png"
import {Link} from "react-router-dom"

export default class BeHost_Room extends React.Component{
    render(){
        return(
            <div className="bhr">
                <div className="bhr_Header">
                    <div className="bhr_logo">
                        <Link to="/"><img src={logo} alt=""/></Link>
                    </div>
                    <div className="bhr_step">
                        Step 1: Start with the basics
                    </div>
                </div>
                <div className="bhr_progressBar">
                    <div className="bhr_progress"></div>
                    <div className="bhr_progressBar1"></div>
                    <div className="bhr_progressBar2"></div>
                    <div className="bhr_progressBar3"></div>
                    <div className="bhr_progressBar4"></div>
                    <div className="bhr_progressBar5"></div>
                    <div className="bhr_progressBar6"></div>
                    <div className="bhr_progressBar7"></div>
                </div>
                <div className="bhr_step1Content">
                    <div className="bhr_step1Question">
                        <div className="bhr_step1Question_title">
                            What kind of place are you listing?
                        </div>
                        <div className="bhr_step1Question_content">
                            First, let’s narrow things down
                        </div>
                        <select name="" id="" className="bhr_step1Question_select">
                            <option value="none" className="bhr_step1Question_selectOption">Select One</option>
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>
                            <option value="Secondary Unit">Secondary Unit</option>
                            <option value="Unique Space">Unique Space</option>
                            <option value="Bed and breakfast">Bed and breakfast</option>
                            <option value="Boutique hotel">Boutique hotel</option>
                        </select> 
                        <div className="bhr_step1Question_content">
                        Now choose a property type
                        </div>
                        <select name="" id="" className="bhr_step1Question_select">
                            <option value="none" className="bhr_step1Question_selectOption">Select One</option>
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>
                            <option value="Secondary Unit">Secondary Unit</option>
                            <option value="Unique Space">Unique Space</option>
                            <option value="Bed and breakfast">Bed and breakfast</option>
                            <option value="Boutique hotel">Boutique hotel</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}