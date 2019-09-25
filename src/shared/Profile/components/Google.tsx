import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import axios from "axios"
// or
// import { GoogleLogin } from 'react-google-login';
 
 
export default class Google extends React.Component{
    state = {
        isLoggedIn: false,
        userID: '',
        email: '',
        data:{
            UserID:'',
            Username:'',
            Useremail:'',
            Password:'',
            FacebookEmail:'',
        }
    }
    componentWillMount(){
        axios.get('http://localhost:27017/api/users/' + localStorage.getItem('UserID'))
            .then(res => {
                this.setState(
                    {
                        data: res.data
                    }
                )
            }
        )
    }
    responseGoogle = (response : any) => {
    //   console.log(response);
        // axios({
            // url: 'http://backendtpaweb.herokuapp.com/api/users', 
            // method : "PATCH",
            // data : {
                
            // },
            // headers:{"Content-Type": "application/x-www-form-urlencoded"}
            // }
        // ); 
        this.setState({
            isLoggedIn: true,
            email: response.profileObj.email,
        });
        axios({
            url: 'http://localhost:27017/api/users/' + localStorage.getItem('UserID'), 
            method : "POST",
            data : {
                Password: this.state.data.Password,
                FacebookEmail: this.state.data.FacebookEmail + "",
                GoogleEmail: this.state.email + ""
            },
            headers:{"Content-Type": "application/x-www-form-urlencoded"}
            }
        );
        alert('Google Link Success!')
        window.location.reload();
    }

    render(){
        return(
            <GoogleLogin
                clientId="155522261846-9c6bo7ru2d6beihpve134ile2m0m3bs7.apps.googleusercontent.com"
                buttonText="Link Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            // document.getElementById('googleButton')
        )
    }
}