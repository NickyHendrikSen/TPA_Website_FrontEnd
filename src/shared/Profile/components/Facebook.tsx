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
        data:{
            UserID:'',
            Username:'',
            Useremail:'',
            Password:'',
            GoogleEmail:'',
        }
    }
    componentWillMount(){
        axios.get('http://backendtpaweb.herokuapp.com/api/users/' + localStorage.getItem('UserID'))
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
        axios({
            url: 'http://backendtpaweb.herokuapp.com/api/users/' + localStorage.getItem('UserID'), 
            method : "POST",
            data : {
                Password: this.state.data.Password,
                FacebookEmail: this.state.email + "",
                GoogleEmail: this.state.data.GoogleEmail + ""
            },
            headers:{"Content-Type": "application/x-www-form-urlencoded"}
            }
        );
        alert('Facebook Link Success!')
        window.location.reload();
    }

    componentClicked = () =>{
        console.log('clicked');
    }
    render(){
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = (<FacebookLogin 
                appId = "393167704736501" 
                autoLoad={false} 
                fields="name,email,picture" 
                onClick={this.componentClicked} 
                callback={this.responseFacebook}
                icon="fa-facebook-f"
                textButton="&nbsp;&nbsp;&nbsp;Link Facebook"
                cssClass="login_fb"
                />)
        }
        else{
            fbContent=(<FacebookLogin 
                appId = "393167704736501" 
                autoLoad={false} 
                fields="name,email,picture" 
                onClick={this.componentClicked} 
                callback={this.responseFacebook}
                icon="fa-facebook-f"
                textButton="&nbsp;&nbsp;&nbsp;Link Facebook"
                cssClass="login_fb"
                />)
        }
        return(
            <div>{fbContent}</div>
        )
    }
}