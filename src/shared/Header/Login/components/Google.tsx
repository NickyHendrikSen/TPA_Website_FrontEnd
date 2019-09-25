import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios"
// or
// import { GoogleLogin } from 'react-google-login';
 
 
export default class Google extends React.Component{
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
        data:[{
            UserID:'',
            Username:'',
            Useremail:'',
            Password:''
        }]
    }
    responseGoogle = (response : any) => {
        this.state.email = response.profileObj.email
        var found = false;
        this.state.data.map(users=>{
            if(users.Useremail == response.profileObj.email){
                localStorage.setItem('UserID', users.UserID);
                (document.getElementById('login_header') as HTMLElement).style.display = "none";
                (document.getElementById('signup_header') as HTMLElement).style.display = "none";
                (document.getElementById('logout_header') as HTMLElement).style.display = "block";
                (document.getElementsByClassName('menu_picture')[0] as HTMLElement).style.display = "block";
                (document.getElementsByClassName('menu_logged')[0] as HTMLElement).style.display = "block";
                var lightBox = document.getElementsByClassName("login_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;        lightBox[0].style.display = "none";
                var body = document.getElementsByTagName("Body")[0] as HTMLElement;
                body.style.position="relative";
                found = true;
                window.location.reload();
            }
        })
        if(found) return;
        
        var lightBox = document.getElementsByClassName("regE_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;
        lightBox[0].style.display = "flex";
        console.log(lightBox[0]);   
        var body = document.getElementsByTagName("Body")[0] as HTMLElement;
        
        var lightBox = document.getElementsByClassName("login_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;        lightBox[0].style.display = "none";
        var body = document.getElementsByTagName("Body")[0] as HTMLElement;
        body.style.position="relative";
        (document.getElementById('regE_txtEmail') as HTMLInputElement).value = this.state.email
        // console.log(response)
    }
    componentWillMount(){
        axios.get('http://localhost:27017/api/users')
            .then(res => {
                this.setState(
                    {
                        data: res.data
                    }
                )
            }
        )
    }
    render(){
        return(
            <GoogleLogin
                clientId="155522261846-9c6bo7ru2d6beihpve134ile2m0m3bs7.apps.googleusercontent.com"
                buttonText="Continue with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            // document.getElementById('googleButton')
        )
    }
}