import React from "react";
import "./Home.scss"
import {Link} from "react-router-dom"
import downArrow from "./img/down-chevron.png"

export default class Home extends React.Component{
    // constructor(props : any){
    //     super(props);
    // }
    whereInputFocus(){
        var InputWrapperDiv = document.getElementsByClassName("homeSearchLocationWhere")[0]
        if(InputWrapperDiv.className == "homeSearchLocationWhereFocused") return;
        InputWrapperDiv.classList.remove("homeSearchLocationWhere");   //remove the class
        InputWrapperDiv.classList.add("homeSearchLocationWhereFocused");   //add the class
    }
    whereInputBlur(){
        var InputWrapperDiv = document.getElementsByClassName("homeSearchLocationWhereFocused")[0]
        if(InputWrapperDiv.className == "homeSearchLocationWhere") return;
        InputWrapperDiv.classList.remove("homeSearchLocationWhereFocused");   //remove the class
        InputWrapperDiv.classList.add("homeSearchLocationWhere");   //add the class
    }
    render()
    {
        return(
            <div className="wrapper">
                <div className="headerContent">
                    <div className="homeSearchWrapper">
                        <div className="homeSearch_title">
                        {/* The link is temporary */}
                        <h1>Book unique places to <Link to = "/stay">stay</Link> and things to do.</h1>
                        </div>
                        {/* inputs wrapper */}
                        <div className="homeSearchLocationWrapper">
                            {/* Where */}
                            <div className="homeSearchLocation_text">
                                <label htmlFor="search_whereInput">
                                    WHERE
                                </label>
                            </div>
                            <div className="homeSearchLocationWhereWrapper">
                                <div className="homeSearchLocationWhere">
                                    <div className="homeSearchLocationWhere_InputWrapper">
                                        <input className="homeSearchLocationWhere_Input" 
                                        onFocus={this.whereInputFocus} 
                                        onBlur = {this.whereInputBlur}
                                        type="text" name="search_whereInput" 
                                        id="search_txtWhere" placeholder="Anywhere"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* CheckIn and CheckOut */}
                        <div className="homeSearchCheck">
                            <div className="homeSearchCheck_in">
                                <div className="homeSearchCheckIn_text">
                                    <label htmlFor="search_checkInInput">CHECK-IN</label>
                                </div>
                                <div className="homeSearchCheckInWrapper">
                                    <div className="homeSearchCheckIn">
                                        <div className="homeSearchCheckIn_InputWrapper">
                                            <input className="homeSearchCheckIn_Input" 
                                            type="text" name="search_checkInInput" 
                                            id="search_txtCheckIn" placeholder="mm/dd/yyyy"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="homeSearchCheck_out">
                                <div className="homeSearchCheckOut_text">
                                    <label htmlFor="">CHECKOUT</label>
                                </div>
                                <div className="homeSearchCheckOutWrapper">
                                    <div className="homeSearchCheckOut">
                                        <div className="homeSearchCheckOut_InputWrapper">
                                            <input className="homeSearchCheckOut_Input" 
                                            type="text" name="search_checkInInput" 
                                            id="search_txtCheckIn" placeholder="mm/dd/yyyy"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Guest */}
                        <div className = "homeSearch_Guest">
                            <div className="homeSearchGuest_text">
                                <label htmlFor="search_guestInput">
                                    GUESTS
                                </label>
                            </div>
                            <div className="homeSearchGuestWrapper">
                                <button>Guests
                                    <div className="homeSearchGuest_svgWrapper">
                                        <img src={downArrow} alt=""/>
                                    </div>                                    
                                </button>
                            </div>
                        </div>
                        {/* Search Button */}
                        <div className="homeSearch_SearchButtonWrapper">
                            <button className="homeSearch_SearchButton">
                                Search
                            </button>
                        </div>
                    </div>
                    <div className="description">
                        Introducing Aivbnb.com
                    </div>
                </div>
            </div>
        )
    }
}