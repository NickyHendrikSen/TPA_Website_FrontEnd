import FacebookLogin from "react-facebook-login"
import React from "react"
import axios from "axios"
import { CLIENT_RENEG_LIMIT } from "tls";

export default class Facebook extends React.Component{
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
    componentWillMount(){
        axios.get('http://backendtpaweb.herokuapp.com/api/users')
            .then(res => {
                this.setState(
                    {
                        data: res.data
                    }
                )
            }
        )
    }
    responseFacebook = (response:any)=>{
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
        var found = false;
        this.state.data.map(users=>{
            console.log(users.Useremail + " " + this.state.email)
            if(users.Useremail == this.state.email){
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
    }

    componentClicked = () =>{
        console.log('clicked');
    }
    render(){
        let fbContent;
        if(this.state.isLoggedIn){
            // fbContent = null;
        }
        else{
            fbContent=(<FacebookLogin 
                appId = "393167704736501" 
                autoLoad={false} 
                fields="name,email,picture" 
                onClick={this.componentClicked} 
                callback={this.responseFacebook}
                icon="fa-facebook-f"
                textButton="&nbsp;&nbsp;&nbsp;Continue with facebook"
                cssClass="login_fb"
                />)
        }
        return(
            <div className="FB">{fbContent}</div>
        )
    }
}