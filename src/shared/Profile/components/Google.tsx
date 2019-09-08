import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// or
// import { GoogleLogin } from 'react-google-login';
 
 
const responseGoogle = (response : any) => {
  console.log(response);
}
export default class Google extends React.Component{
    
    render(){
        return(
            <GoogleLogin
                clientId="155522261846-9c6bo7ru2d6beihpve134ile2m0m3bs7.apps.googleusercontent.com"
                buttonText="Link Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            // document.getElementById('googleButton')
        )
    }
}