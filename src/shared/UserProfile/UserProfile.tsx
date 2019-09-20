import React from "react"
import "./UserProfile.scss"
import Header from "../Header/Header"
import EditProfile from "./EditProfile/EditProfile"
import Review from "./Review/Review"

export default class UserProfile extends React.Component{
    componentWillMount(){
        if(localStorage.getItem('UserID') == null || localStorage.getItem('UserID') == ""){
            window.location.href = "/";
            return;
        }
        //Ambil experience semua, ambil plan semua, terus cari yang plan / experience user id nya yang lagi login,, tampilin reviewnya
        //push ke array lalu setstate

    }
    showEditProfile(){
        (document.getElementById('EditProfileDiv') as HTMLElement).style.display = "block";
        (document.getElementById('ReviewDiv') as HTMLElement).style.display = "none";
    }
    showReview(){
        (document.getElementById('EditProfileDiv') as HTMLElement).style.display = "none";
        (document.getElementById('ReviewDiv') as HTMLElement).style.display = "block";
    }
    render(){
        return(
            <div>
                <div className="up_firstWrapper">
                    <div className="upHeader">
                    <Header />
                    </div>
                    <div className="up_wrapper">
                        <div className="up_menu">
                            <div onClick={this.showEditProfile}>
                                Edit Profile
                            </div>
                            <div onClick={this.showReview}>
                                Reviews
                            </div>
                        </div>
                        
                        <div className="upContent">
                            <div id="EditProfileDiv">
                                <EditProfile />
                            </div>
                            <div id="ReviewDiv">
                                <Review />
                            </div>
                        </div>            

                    </div>    
                </div>
            </div>
        )
    }
}