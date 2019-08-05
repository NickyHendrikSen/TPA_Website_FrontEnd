import FacebookLogin from "react-facebook-login"
import React from "react"
import { CLIENT_RENEG_LIMIT } from "tls";

export default class Facebook extends React.Component{
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }
    
    responseFacebook = (response:any)=>{
        console.log(response)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    }

    componentClicked = () =>{
        console.log('clicked');
    }
    render(){
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = null;
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
            <div>{fbContent}</div>
        )
    }
}