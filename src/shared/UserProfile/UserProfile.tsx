import React from "react"
import Header from "../Header/Header"

export default class UserProfile extends React.Component{
    componentWillMount(){
        if(localStorage.getItem('UserID') == null || localStorage.getItem('UserID') == ""){
            window.location.href = "/";
            return;
        }
        //Ambil experience semua, ambil plan semua, terus cari yang plan / experience user id nya yang lagi login,, tampilin reviewnya
        //push ke array lalu setstate

    }
    render(){
        return(
            <div>
                <Header />
            </div>
        )
    }
}