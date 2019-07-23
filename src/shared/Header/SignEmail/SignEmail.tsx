import React from "react"
import "./SignEmail.scss"
import close_icon from "../img/close_icon.png";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

export default class SignEmail extends React.Component{
    regE_setPassword = () =>{
        var pass = (document.getElementsByClassName("regE_inputPass") as HTMLCollectionOf<HTMLElement>)[0] as HTMLInputElement;
        var btn = document.getElementsByClassName("regE_seePass") as HTMLCollectionOf<HTMLElement>;
        if(btn[0].innerText == "O"){
            btn[0].innerText = "X";
            pass.type = "text";
        }
        else{
            btn[0].innerText = "O";
            pass.type = "password";
        }
    }

    regE_validatePass = () =>{
        var txtPass = document.getElementById("regE_txtPass") as HTMLInputElement;
        var txtPass_a = document.getElementById("regE_checkPass1") as HTMLElement;
        var txtPass_b = document.getElementsByClassName("regE_checkPassA") as HTMLCollectionOf<HTMLElement>;
        var txtPass_c = document.getElementById("regE_checkPass2") as HTMLElement;
        var txtPass_d = document.getElementsByClassName("regE_checkPassB") as HTMLCollectionOf<HTMLElement>;
        var txtPass_e = document.getElementById("regE_checkPass3") as HTMLElement;
        var txtPass_f = document.getElementsByClassName("regE_checkPassC") as HTMLCollectionOf<HTMLElement>;
        var txtPass_g = document.getElementById("regE_checkPass4") as HTMLElement;
        var txtPass_h = document.getElementsByClassName("regE_checkPassD") as HTMLCollectionOf<HTMLElement>;
        if(txtPass.value.length >= 8)
        {
            txtPass_e.innerText = "O"
            txtPass_f[0].style.color = "rgb(0, 166, 153)";
            txtPass_f[1].style.color = "rgb(0, 166, 153)";
        }
        else{
            txtPass_e.innerText = "X"
            txtPass_f[0].style.color = "#FC642D";
            txtPass_f[1].style.color = "#FC642D";
        }
    }

    validate = () =>{
        var txtEmail = document.getElementById("regE_txtEmail") as HTMLInputElement;
        var txtFirst = document.getElementById("regE_txtFirst") as HTMLInputElement;
        var txtLast = document.getElementById("regE_txtLast") as HTMLInputElement;
        var txtPass = document.getElementById("regE_txtPass") as HTMLInputElement;
        
        //email empty
        if(txtEmail.value == ""){
            var errEmail = document.getElementById("regE_emailError") as HTMLInputElement;
            txtEmail.style.border = "1px solid #FC642D";
            errEmail.style.display = "block";
            errEmail.innerText = "Email is required.";
        }
        else{
            var errEmail = document.getElementById("regE_emailError") as HTMLInputElement;
            txtEmail.style.border = "1px solid #EBEBEB";
            errEmail.style.display = "none";
        }

        //first name empty
        if(txtFirst.value == ""){
            var errFirst = document.getElementById("regE_firstError") as HTMLInputElement;
            txtFirst.style.border = "1px solid #FC642D";
            errFirst.style.display = "block";
            errFirst.innerText = "First name is required.";
        }
        else{
            var errFirst = document.getElementById("regE_firstError") as HTMLInputElement;
            txtFirst.style.border = "1px solid #EBEBEB";
            errFirst.style.display = "none";
        }

        //last name empty
        if(txtLast.value == ""){
            var errLast = document.getElementById("regE_lastError") as HTMLInputElement;
            txtLast.style.border = "1px solid #FC642D";
            errLast.style.display = "block";
            errLast.innerText = "Last name is required.";
        }
        else{
            var errLast = document.getElementById("regE_lastError") as HTMLInputElement;
            txtLast.style.border = "1px solid #EBEBEB";
            errLast.style.display = "none";
        }

        //password empty
        if(txtPass.value == ""){
            var errPass = document.getElementById("regE_passError") as HTMLInputElement;
            txtPass.style.border = "1px solid #FC642D";
            errPass.style.display = "block";
            errPass.innerText = "Password is required.";
        }
        else{
            var errPass = document.getElementById("regE_passError") as HTMLInputElement;
            txtPass.style.border = "1px solid #EBEBEB";
            errPass.style.display = "none";
        }
        
    }
    showCheckPass(){
        var check = document.getElementsByClassName("regE_checkPass") as HTMLCollectionOf<HTMLElement>;
        check[0].style.display = "block";
    }
    regE_close(){
        var check = document.getElementsByClassName("regE_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;
        check[0].style.display = "none";
    }
    render(){
        return(
            <div className="regE_lightBoxWrapper">
                <div className="regE_lightBox">
                    {/* X close */}
                    <div className="regE_close" onClick={this.regE_close}>
                        <img src={close_icon} alt=""/>
                    </div>
                    {/* sign up with other */}
                    <div className="regE_otherType">
                        Sign Up with&nbsp;
                        <Router>
                            <Link to = "fb">Facebook</Link>
                            &nbsp;or&nbsp;
                            <Link to = "google">Google</Link>
                        </Router>
                    </div>
                    {/* or */}
                    <div className="regE_or">
                        <span>or</span>
                    </div>
                    <div className="regE_input">
                        <input type="email" name="" id="regE_txtEmail" className="regE_inputEmail" placeholder="Email address"/>
                        <div className="regE_lblError" id="regE_emailError"></div>
                        <input type="text" name="" id="regE_txtFirst" className="regE_inputFirst" placeholder="First name" />
                        <div className="regE_lblError" id="regE_firstError">First name is required.</div>
                        <input type="text" name="" id="regE_txtLast" className="regE_inputLast" placeholder="Last name" />
                        <div className="regE_lblError" id="regE_lastError">Last name is required.</div>

                        <div className="regE_inputPassWrapper">
                            <input type="password" name="" id="regE_txtPass" onFocus={this.showCheckPass}
                            className="regE_inputPass" onChange={this.regE_validatePass} placeholder="Create a Password" />
                            <button onClick={this.regE_setPassword} className="regE_seePass">O</button>
                        </div>
                        <div className="regE_lblError" id="regE_passError">Password is required.</div>    
                        <div className="regE_checkPass">
                            <div><span id="regE_checkPass1" className="regE_checkPassA">X</span>
                            <span className="regE_checkPassA">&nbsp;Password strength: weak</span></div>
                            <div><span id="regE_checkPass2" className="regE_checkPassB">X</span>
                            <span className="regE_checkPassB">&nbsp;Cannot contain your name or email address</span></div>
                            <div><span id="regE_checkPass3" className="regE_checkPassC">X</span>
                            <span  className="regE_checkPassC">&nbsp;At least 8 characters</span></div>
                            <div><span id="regE_checkPass4" className="regE_checkPassD">X</span>
                            <span className="regE_checkPassD">&nbsp;Contains a number or symbol</span></div>
                        </div>
                        <button className="regE_btnSignUp" onClick={this.validate}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}