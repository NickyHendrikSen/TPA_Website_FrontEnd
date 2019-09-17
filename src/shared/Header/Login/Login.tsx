import React, { useEffect } from "react"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import "./Login.scss"
import axios from "axios"
import close_icon from "../img/close_icon.png"
import facebook_icon from "../img/facebook_img.png"
import google_icon from "../img/google_icon.png"
import email_icon from "../img/email_png.png"
import Facebook from "./components/Facebook"
import Google from "./components/Google"
import { isUserWhitespacable } from "@babel/types";

export default class SignUp extends React.Component{

    state={
        data:[{
            UserID:'',
            Username:'',
            Useremail:'',
            Password:'',
            UserThumbnailURL:'',
        }],
        logged:{
            UserID:'',
            Username:'',
            UserThumbnailURL:'',
        }
    }
    componentWillMount(){
        // const { fromNotifications } = this.props.location.state
        // if(localStorage.getItem('UserID') == "" || localStorage.getItem('UserID') == null){
            axios.get('http://backendtpaweb.herokuapp.com/api/users')
                .then(res => {
                    this.setState(
                        {
                            data: res.data
                        }
                    )
                    // console.log(res);
                }
            )
            // return;
        // }
        axios.get('http://backendtpaweb.herokuapp.com/api/users/' + localStorage.getItem('UserID'))
            .then(res => {
                    this.setState(
                        {
                            logged : res.data
                        }
                    )
                    // console.log(res.data);
                }
            )
    }
    componentDidMount(){
        // console.log(localStorage.getItem('UserID'))
        if(localStorage.getItem('UserID') != null && localStorage.getItem('UserID') != ""){
            (document.getElementById('login_header') as HTMLElement).style.display = "none";
            (document.getElementById('signup_header') as HTMLElement).style.display = "none";
            (document.getElementById('logout_header') as HTMLElement).style.display = "block";
            (document.getElementsByClassName('menu_picture')[0] as HTMLElement).style.display = "block";
            (document.getElementsByClassName('menu_logged')[0] as HTMLElement).style.display = "block";
            (document.getElementById('plan_header') as HTMLElement).style.display = "block";
            if(localStorage.getItem("UserURL") == "" || localStorage.getItem("UserURL") == null){
                (document.getElementsByClassName('menu_pictureImg')[0] as HTMLImageElement).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZ2jUO2WVf_TyxRvqQR36RTVn6EvaZRTvWdn6naMTn7HD8-guLw";
            }
            else
                (document.getElementsByClassName('menu_pictureImg')[0] as HTMLImageElement).src = localStorage.getItem("UserURL") + "";
            
        }
    }

    lightBox_login_hide(){
        var lightBox = document.getElementsByClassName("login_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;        
        lightBox[0].style.display = "none";
        var body = document.getElementsByTagName("Body")[0] as HTMLElement;
        body.style.position="relative";
    }
    login_showPassword(){
        var txtPass = document.getElementById("login_txtPass") as HTMLInputElement;
        var btn = document.getElementsByClassName("login_showPass") as HTMLCollectionOf<HTMLElement>;
        if(txtPass.type == "text"){
            txtPass.type = "password";
            btn[0].innerText = "Show Password";
        }
        else if(txtPass.type == "password"){
            txtPass.type = "text";
            btn[0].innerText = "Hide Password";
        }
    }
    login_validate(state : any){
        var txtEmail = document.getElementById("login_txtEmail") as HTMLInputElement;
        var txtPass = document.getElementById("login_txtPass") as HTMLInputElement;
        var errMessage = document.getElementsByClassName("login_errMessage") as HTMLCollectionOf<HTMLElement>;
        //rgb(217, 57, 0);
        //#EBEBEB;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var boole = re.test(txtEmail.value) as boolean;
        var a = boole == false? 1 : 0;
        // console.log(a);
        var success = true;
        if(txtEmail.value == ""){
            txtEmail.style.border = "1px solid rgb(217, 57, 0)";
            errMessage[0].innerText = "Email is required.";
            errMessage[0].style.display = "block";
            success = false;
        }else if(a == 1){
            txtEmail.style.border = "1px solid rgb(217, 57, 0)";
            errMessage[0].innerText = "Enter a valid email.";
            errMessage[0].style.display = "block";
            success = false;
        }else{
            txtEmail.style.border = "1px solid #EBEBEB";
            errMessage[0].innerText = "";
            errMessage[0].style.display = "none";
        }

        if(txtPass.value == ""){
            txtPass.style.border = "1px solid rgb(217, 57, 0)";
            errMessage[1].innerText = "Password is required.";
            errMessage[1].style.display = "block";
            success = false;
        }
        else if(txtPass.value.length < 8){
            txtPass.style.border = "1px solid rgb(217, 57, 0)";
            errMessage[1].innerText = "Your password must be at least 8 characters. Please try again.";
            errMessage[1].style.display = "block";
            success = false;
        }else{
            txtPass.style.border = "1px solid #EBEBEB";
            errMessage[1].innerText = "";
            errMessage[1].style.display = "none";
        }
        if(success == false) return;
        //Login check here
        // console.log(state.length);
        // console.log(localStorage.getItem('UserID') + " <-");

        for(var i = 0; i < state.length; i++){
            if(state[i].Useremail == txtEmail.value && state[i].Password == txtPass.value){
                alert('success login');
                var lightBox = document.getElementsByClassName("login_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;        lightBox[0].style.display = "none";
                var body = document.getElementsByTagName("Body")[0] as HTMLElement;
                body.style.position="relative";
                localStorage.setItem('UserID', state[i].UserID);
                localStorage.setItem('UserURL', state[i].UserThumbnailURL);
                (document.getElementById('login_header') as HTMLElement).style.display = "none";
                (document.getElementById('signup_header') as HTMLElement).style.display = "none";
                (document.getElementById('logout_header') as HTMLElement).style.display = "block";
                (document.getElementsByClassName('menu_picture')[0] as HTMLElement).style.display = "block";
                (document.getElementsByClassName('menu_logged')[0] as HTMLElement).style.display = "block";
                if(state[i].UserThumbnailURL == "" || state[i].UserThumbnailURL == null){
                    (document.getElementsByClassName('menu_pictureImg')[0] as HTMLImageElement).src = "https://anno.ai/assets/img/people/no-user-image.gif";
                }
                else
                    (document.getElementsByClassName('menu_pictureImg')[0] as HTMLImageElement).src = "https://" + state[i].UserThumbnailURL;
                axios({
                    url: 'http://backendtpaweb.herokuapp.com/api/history-insert/' + (state[i].UserID), 
                    method : "POST",
                    data : {
                },
                headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }  
                )
                window.location.reload();

                return;
            }
        }
        // this.state.data.map(users=>{
            // if(users.Useremail == txtEmail.value && users.Password == txtPass.value){
            //     alert('success login');
            //     return;
            // }
        // })
        
        alert('Username or Password is wrong');
    }

    render(){
        return(
            <div className="login_lightBoxWrapper">
                <div className="login_lightBox">
                    <div className="login_close">
                        <img src={close_icon} alt="" onClick={this.lightBox_login_hide}/>
                    </div>
                    <div className="login_alt">
                        {/* <div className="login_fb"  > */}
                            <Facebook />
                            {/* <img src={facebook_icon} alt=""/>
                            <span>
                                Continue with Facebook
                            </span> */}
                        {/* </div> */}
                        {/* <div className="login_google">
                            <img src={google_icon} alt=""/>
                            <span>
                                Continue with Google
                            </span>
                        </div> */}
                        <div className="login_google">
                            <Google />
                        </div>
                        {/* <div className="login_or"> */}
                            {/* <span>or</span> */}
                        {/* </div> */}
                        <input type="email" name="" id="login_txtEmail" className="login_input" placeholder="Email address"/>
                        <div className="login_errMessage"></div>
                        <input type="password" name="" id="login_txtPass" className="login_input" placeholder="Password"/>
                        <div className="login_errMessage"></div>
                        <div className="login_rememShow">
                            {/* <div className="login_remem"> */}
                                {/* <input type="checkbox" name="" id=""value=""/>Remember Me */}
                            {/* </div> */}
                            <div className="login_showPass" onClick={this.login_showPassword}>
                            Show Password
                            </div>
                        </div>
                        <div className="login_login" onClick={() => this.login_validate(this.state.data)}>
                            <span>
                                Log in
                            </span>
                        </div>
                        <div className="login_forgotPassword">
                            {/* Forgot password? */}
                        </div>
                        <hr/>
                        <div className="login_reg">
                            Don't have an account?&nbsp;
                            <Router>
                                <Link to ="/sign">Sign in</Link>
                            </Router>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}