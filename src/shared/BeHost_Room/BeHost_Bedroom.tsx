import React from "react"
import "./BeHost_Bedroom.scss"
import logo from "./img/logo.png"
import {Link} from "react-router-dom"

export default class BeHost_Room extends React.Component{
    accomodateInc(){
        var a = parseInt((document.getElementById('accomodate') as HTMLInputElement).innerText);
        (document.getElementById('accomodate') as HTMLInputElement).innerText = a + 1 + "";
        (document.getElementsByClassName('bhr_step1Question_min')[0] as HTMLElement).style.color = 'rgb(0, 132, 137)';
        (document.getElementsByClassName('bhr_step1Question_min')[0] as HTMLElement).style.borderColor = 'rgb(0, 132, 137)';

    }
    accomodateDec(){
        var a = parseInt((document.getElementById('accomodate') as HTMLInputElement).innerText);
        if(a != 1)
        (document.getElementById('accomodate') as HTMLInputElement).innerText = a - 1 + "";
        
        if(parseInt((document.getElementById('accomodate') as HTMLInputElement).innerText) == 1){
            (document.getElementsByClassName('bhr_step1Question_min')[0] as HTMLElement).style.color = 'rgb(0, 132, 137, 0.3)';
            (document.getElementsByClassName('bhr_step1Question_min')[0] as HTMLElement).style.borderColor = 'rgb(0, 132, 137, 0.3)';
        }
    }
    bedInc(){
        var a = parseInt((document.getElementById('beds') as HTMLInputElement).innerText);
        (document.getElementById('beds') as HTMLInputElement).innerText = a + 1 + "";
        (document.getElementsByClassName('bhr_step1Question_min')[1] as HTMLElement).style.color = 'rgb(0, 132, 137)';
        (document.getElementsByClassName('bhr_step1Question_min')[1] as HTMLElement).style.borderColor = 'rgb(0, 132, 137)';
    }
    bedDec(){
        var a = parseInt((document.getElementById('beds') as HTMLInputElement).innerText);
        if(a != 1)
        (document.getElementById('beds') as HTMLInputElement).innerText = a - 1 + "";
        
        if(parseInt((document.getElementById('beds') as HTMLInputElement).innerText) == 1){
            (document.getElementsByClassName('bhr_step1Question_min')[1] as HTMLElement).style.color = 'rgb(0, 132, 137, 0.3)';
            (document.getElementsByClassName('bhr_step1Question_min')[1] as HTMLElement).style.borderColor = 'rgb(0, 132, 137, 0.3)';
        }
    }
    validate1(){
        var success = true;


        if(success == true){
            window.location.href = '/become-a-host/bathroom';
        }

    }
    componentDidMount(){
        (document.getElementById('bhr_step1Question_bedrooms') as HTMLElement).innerHTML = "";
        for(let i = 1; i <= 50; i++)
            (document.getElementById('bhr_step1Question_bedrooms') as HTMLElement).innerHTML += "<option value=\"" + i + "\">" + i + " bedroom(s)</option>";
            
        
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
                <div className="bhr_progressBarStep2">
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
                            How many guests can your place accommodate?
                        </div>
                        <div className="bhr_step1Question_content">
                                Check that you have enough beds to accommodate all your guests comfortably.
                        </div>
                        <div className="bhr_step1Question_var">
                            Guests
                            <div className="bhr_step1Question_varRight">
                                <div className="bhr_step1Question_min" onClick={this.accomodateDec}>-</div>
                                <span id="accomodate">1</span>
                                <div className="bhr_step1Question_plus" onClick={this.accomodateInc}>+</div>
                            </div>
                        </div>
                        <div className="bhr_step1Question_content">
                            How many bedrooms can guests use?
                        </div>
                        <select id="bhr_step1Question_bedrooms">
                            <option value=""></option>
                        </select>
                        <div className="bhr_step1Question_content">
                        How many beds can guests use?
                        </div>
                        <div className="bhr_step1Question_var">
                            Beds
                            <div className="bhr_step1Question_varRight">
                                <div className="bhr_step1Question_min" onClick={this.bedDec}>-</div>
                                <span id="beds">1</span>
                                <div className="bhr_step1Question_plus" onClick={this.bedInc}>+</div>
                            </div>
                        </div>
                        <button onClick={this.validate1}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}