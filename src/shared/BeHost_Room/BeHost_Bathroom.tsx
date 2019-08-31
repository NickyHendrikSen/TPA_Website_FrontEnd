import React from "react"
import "./BeHost_Bathroom.scss"
import logo from "./img/logo.png"
import {Link} from "react-router-dom"

export default class BeHost_Room extends React.Component{
    bathDec(){

    }
    bathInc(){
        
    }
    validate1(){
        
    }
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
                            How many bathrooms?
                        </div>
                        <div className="bhr_step1Question_content">
                            Count bathrooms that don’t have a shower or bathtub as a half bathroom.
                        </div>
                        <div className="bhr_step1Question_var">
                            Bathrooms
                            <div className="bhr_step1Question_varRight">
                                <div className="bhr_step1Question_min" onClick={this.bathDec}>-</div>
                                <span id="accomodate">1</span>
                                <div className="bhr_step1Question_plus" onClick={this.bathInc}>+</div>
                            </div>
                        </div>
                        <button onClick={this.validate1}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}