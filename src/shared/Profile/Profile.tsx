import React from "react"
import axios from "axios"
import "./Profile.scss"
import Header from "../Header/Header"
import Facebook from "./components/Facebook"
import Google from "./components/Google"

export default class Profile extends React.Component{
    state={
        profile:{
            UserID:'',
            Username:'',
            Useremail:'',
            Password:'',
            UserThumbnailURL:''
        }
    }
    componentWillMount(){
        if(localStorage.getItem('UserID') == null || localStorage.getItem("UserID") == ""){
            window.location.href = "/";
            return;
        }
        axios.get('http://backendtpaweb.herokuapp.com/api/users/' + localStorage.getItem('UserID'))
            .then(res => {
                this.setState(
                    {
                        profile : res.data
                    }
                )
                // console.log(res.data);
            }
        )
    }
    changePasswordValidate = () =>{
        var oldP = (document.getElementById('oldPassword') as HTMLInputElement).value;
        var newP = (document.getElementById('newPassword') as HTMLInputElement).value;
        var success = true;
        if(oldP != this.state.profile.Password){
            (document.getElementsByClassName('User_OldPasswordErr')[0] as HTMLElement).style.display = "block";
            (document.getElementsByClassName('User_OldPasswordErr')[0] as HTMLElement).innerText = "Old password doesn't match";
            success = false;
        }
        else if(oldP == ""){
            (document.getElementsByClassName('User_OldPasswordErr')[0] as HTMLElement).style.display = "block";
            (document.getElementsByClassName('User_OldPasswordErr')[0] as HTMLElement).innerText = "Old password can't be empty";
            success = false;
        }
        else{
            (document.getElementsByClassName('User_OldPasswordErr')[0] as HTMLElement).style.display = "none";
        }

        if(newP.length < 8){
            (document.getElementsByClassName('User_NewPasswordErr')[0] as HTMLElement).style.display = "block";
            (document.getElementsByClassName('User_NewPasswordErr')[0] as HTMLElement).innerText = "New password must be atleast 8 length";
            success = false;
        }
        else{
            (document.getElementsByClassName('User_NewPasswordErr')[0] as HTMLElement).style.display = "none";
        }
        if(success == false) return;
        //Update password
    }
    render(){
        return(
            <div>
                <Header />
                <div className="User_Wrapper">
                    <div className="UserHeader">
                        <img src={"http://" +    this.state.profile.UserThumbnailURL} alt=""/>
                        <div className = "UserName">
                            {this.state.profile.Username}
                        </div>
                    </div>
                    <hr/>
                    <div className="User_FacebookLink">
                        Facebook Link : Unlink
                    </div>
                    <Facebook />
                    <div className="User_GoogleLink">
                        Google Link : Unlink
                    </div>
                    <div className="User_Google">
                        <Google />
                    </div>
                    {/* <button className="User_Google">
                        Continue with Google
                    </button> */}
                    <hr/>
                    <div className="User_ChangePasswordTitle">
                        Change Password
                    </div>
                    <div className="User_OldPassword">
                        Old Password : 
                        <input id="oldPassword" type="password" />
                    </div>
                    <div className="User_OldPasswordErr">
                        Please Input Old Password
                    </div>
                    <div className="User_NewPassword">
                        New Password : 
                        <input id="newPassword" type="password" />
                    </div>
                    <div className="User_NewPasswordErr">
                        Please Input New Password
                    </div>
                    <button className="User_ChangePasswordBtn" onClick={this.changePasswordValidate}>
                        Change Password
                    </button>
                </div>
            </div>
        )
    }
}