import React from "react"
import "./SignEmail.scss"
import close_icon from "../img/close_icon.png";
import axios from "axios"
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

    validate = () =>{
        var txtEmail = document.getElementById("regE_txtEmail") as HTMLInputElement;
        var txtFirst = document.getElementById("regE_txtFirst") as HTMLInputElement;
        // var txtLast = document.getElementById("regE_txtLast") as HTMLInputElement;
        var txtPass = document.getElementById("regE_txtPass") as HTMLInputElement;
        

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var boole = re.test(txtEmail.value) as boolean;
        var a = boole == false? 1 : 0;
        var success = true;
        //email empty
        if(txtEmail.value == ""){
            var errEmail = document.getElementById("regE_emailError") as HTMLInputElement;
            txtEmail.style.border = "1px solid #FC642D";
            errEmail.style.display = "block";
            errEmail.innerText = "Email is required.";
            success = false;
        }
        else if(a == 1){
            var errEmail = document.getElementById("regE_emailError") as HTMLInputElement;
            txtEmail.style.border = "1px solid #FC642D";
            errEmail.style.display = "block";
            errEmail.innerText = "Enter a valid email.";
            success = false;
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
            success = false;
        }
        else{
            var errFirst = document.getElementById("regE_firstError") as HTMLInputElement;
            txtFirst.style.border = "1px solid #EBEBEB";
            errFirst.style.display = "none";
        }

        //last name empty
        // if(txtLast.value == ""){
        //     var errLast = document.getElementById("regE_lastError") as HTMLInputElement;
        //     txtLast.style.border = "1px solid #FC642D";
        //     errLast.style.display = "block";
        //     errLast.innerText = "Last name is required.";
        //     success = false;
        // }
        // else{
        //     var errLast = document.getElementById("regE_lastError") as HTMLInputElement;
        //     txtLast.style.border = "1px solid #EBEBEB";
        //     errLast.style.display = "none";
        // }

        //password empty
        if(txtPass.value == ""){
            var errPass = document.getElementById("regE_passError") as HTMLInputElement;
            txtPass.style.border = "1px solid #FC642D";
            errPass.style.display = "block";
            errPass.innerText = "Password is required.";
            success = false;
        }
        else if(txtPass.value.length < 8){
            var errPass = document.getElementById("regE_passError") as HTMLInputElement;
            txtPass.style.border = "1px solid #FC642D";
            errPass.style.display = "block";
            errPass.innerText = "Your password must be at least 8 characters";
            success = false;
        }
        else{
            var errPass = document.getElementById("regE_passError") as HTMLInputElement;
            txtPass.style.border = "1px solid #EBEBEB";
            errPass.style.display = "none";
        }

        if(success){
            var txtEmail = document.getElementById("regE_txtEmail") as HTMLInputElement;
            var txtFirst = document.getElementById("regE_txtFirst") as HTMLInputElement;
            var txtPass = document.getElementById("regE_txtPass") as HTMLInputElement;
            var date = new Date().getFullYear();
            var noPicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ2jUO2WVf_TyxRvqQR36RTVn6EvaZRTvWdn6naMTn7HD8-guLw";
            axios({
                url: 'localhost:27017/api/users', 
                method : "POST",
                data : {
                "Username": txtFirst.value,
                "Useremail": txtEmail.value,
                "Password": txtPass.value,
                "UserLocation": "Jakarta Barat, Indonesia",
                "UserAbout": "Not Set",
                "UserJoinDate": date.toString(),
                "UserLanguage": "Indonesia",
                "UserResponseTime": "Within a second",
                "UserResponseRate": 100, 
                "UserThumbnailURL": noPicture
            },
            headers:{"Content-Type": "application/x-www-form-urlencoded"}
            }
        );
            alert('Register Success');
            window.location.reload();
            this.regE_close();
        }
    }
    regE_close = () => {
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
                        {/* <span>or</span> */}
                    </div>
                    <div className="regE_input">
                        <input type="email" name="" id="regE_txtEmail" className="regE_inputEmail" placeholder="Email address"/>
                        <div className="regE_lblError" id="regE_emailError"></div>
                        <input type="text" name="" id="regE_txtFirst" className="regE_inputFirst" placeholder="Username" />
                        <div className="regE_lblError" id="regE_firstError">Username is required.</div>
                        {/* <input type="text" name="" id="regE_txtLast" className="regE_inputLast" placeholder="Last name" />
                        <div className="regE_lblError" id="regE_lastError">Last name is required.</div> */}

                        <div className="regE_inputPassWrapper">
                            <input type="password" name="" id="regE_txtPass"
                            className="regE_inputPass" placeholder="Create a Password" />
                            <button onClick={this.regE_setPassword} className="regE_seePass">O</button>
                        </div>
                        <div className="regE_lblError" id="regE_passError">Password is required.</div>  
                        {/* <div className="regE_birthdayWrapper">
                            <div className="regE_birthdayBold">Birthday</div> */}
                            {/* <div className="regE_birthdayDesc">To sign up, you must be 18 or older. Other people won’t see your birthday.</div> */}
                            {/* <input type="date" name="" id="regE_txtBirthDate" className="regE_inputBirthday"/>
                        </div>
                        <div className="regE_lblError" id="regE_birthdayError">You must be 18 or older.</div> */}
                        <div className="regE_notif"></div>
                        <button className="regE_btnSignUp" onClick={this.validate}>
                            Sign Up
                        </button>
                        {/* <div className="regE_recieveEmail">
                            <input type="checkbox" name="" id=""/>
                            <span>I don’t want to receive marketing messages from Airbnb. I can also opt out of receiving these at any time in my account settings or via the link in the message.</span>
                        </div> */}
                        <hr/>
                        <div className="regE_login">
                            Already have an Airbnb account?&nbsp;
                            <Router>
                                <Link to ="/login">Log in</Link>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}