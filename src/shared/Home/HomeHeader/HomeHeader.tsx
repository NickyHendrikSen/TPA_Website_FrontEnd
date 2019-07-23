import React from "react";
import "./HomeHeader.scss"
import {Link} from "react-router-dom"
import downArrow from "./img/down-chevron.png"

export default class Home extends React.Component{
    // constructor(props : any){
    //     super(props);

    // }
    // whereInputFocus(){
    //     var InputWrapperDiv = document.getElementsByClassName("homeSearchLocationWhere")[0]
    //     // if(InputWrapperDiv.className == "homeSearchLocationWhereFocused") {console.log("asd");return;}
    //     InputWrapperDiv.classList.remove("homeSearchLocationWhere");   //remove the class
    //     InputWrapperDiv.classList.add("homeSearchLocationWhereFocused");   //add the class
    // }
    // whereInputBlur(){
    //     var InputWrapperDiv = document.getElementsByClassName("homeSearchLocationWhereFocused")[0]
    //     if(InputWrapperDiv.className == "homeSearchLocationWhere") return;
    //     InputWrapperDiv.classList.remove("homeSearchLocationWhereFocused");   //remove the class
    //     InputWrapperDiv.classList.add("homeSearchLocationWhere");   //add the class
    // }
    homeSearch_displayGuest(){
        var show = document.getElementsByClassName("homeSearch_addGuestWrapper") as HTMLCollectionOf<HTMLElement>;
        if(show[0].style.display == 'block')
        show[0].style.display = 'none';
        else
        show[0].style.display = 'block';
    }

    homeSearch_addInfant = () =>{
        var infantValue = document.getElementById("homeSearch_infantValue") as HTMLElement;
        var adultValue = document.getElementById("homeSearch_adultValue") as HTMLElement;
        var a = parseInt(infantValue.innerText)+1;
        var b = parseInt(adultValue.innerText);
        var minAdult = document.getElementById("homeSearch_adultMin") as HTMLElement;
        if(b == 0){
            b+=1;
            adultValue.innerText = b + "";
        }
        if(b == 1){
            this.setInvisible(minAdult);
        }
        if(a >= 5){
            a = 5;
            var addButton = document.getElementById("homeSearch_infantPlus") as HTMLElement;
            this.setInvisible(addButton);
        }
        infantValue.innerText = a + "";
        var minButton = document.getElementById("homeSearch_infantMin") as HTMLElement;
        //Set visible
        this.setVisible(minButton);
        this.homeSearch_editGuest();
    }

    homeSearch_reduceInfant = () =>{
        var infantValue = document.getElementById("homeSearch_infantValue") as HTMLElement;
        var a = parseInt(infantValue.innerText)-1;
        var minAdult = document.getElementById("homeSearch_adultMin") as HTMLElement;
        var childrenValue = document.getElementById("homeSearch_childrenValue") as HTMLElement;
        var b = parseInt(childrenValue.innerText);
        if(a <= 0){
            a = 0;
            var minButton = document.getElementById("homeSearch_infantMin") as HTMLElement;
            this.setInvisible(minButton);
            if(b <= 0){
                this.setVisible(minAdult);
            }
        }
        var addButton = document.getElementById("homeSearch_infantPlus") as HTMLElement;
        this.setVisible(addButton);
        infantValue.innerText = a + "";
        this.homeSearch_editGuest();
    }

    homeSearch_reduceChildren = () =>{
        var childrenValue = document.getElementById("homeSearch_childrenValue") as HTMLElement;
        var a = parseInt(childrenValue.innerText)-1;
        var infantValue = document.getElementById("homeSearch_infantValue") as HTMLElement;
        var b = parseInt(infantValue.innerText);
        if(a <= 0){
            a = 0;
            var minButton = document.getElementById("homeSearch_childrenMin") as HTMLElement;
            this.setInvisible(minButton);
            if(b <= 0){
                var minAdult = document.getElementById("homeSearch_adultMin") as HTMLElement;
                this.setVisible(minAdult); 
            }
        }
        var addButton = document.getElementById("homeSearch_childrenPlus") as HTMLElement;
        this.setVisible(addButton);
        var adButton = document.getElementById("homeSearch_adultPlus") as HTMLElement;
        this.setVisible(adButton);

        childrenValue.innerText = a + "";
        this.homeSearch_editGuest();
    }

    homeSearch_addChildren = () =>{
        var childrenValue = document.getElementById("homeSearch_childrenValue") as HTMLElement;
        var adultValue = document.getElementById("homeSearch_adultValue") as HTMLElement;
        var a = parseInt(childrenValue.innerText)+1;
        var b = parseInt(adultValue.innerText);
        var addAdult = document.getElementById("homeSearch_adultPlus") as HTMLElement;
        var addChildren = document.getElementById("homeSearch_childrenPlus") as HTMLElement;
        if(b == 0){
            b+=1;
        }
        if(b == 1){
            var minAdult = document.getElementById("homeSearch_adultMin") as HTMLElement;
            this.setInvisible(minAdult);
        }
        if(a + b >= 16){
            a = 16-b;
            this.setInvisible(addAdult);
            this.setInvisible(addChildren);
        }
        else{
            this.setVisible(addAdult);
            this.setVisible(addChildren);
        }
        var minChildren = document.getElementById("homeSearch_childrenMin") as HTMLElement;
        this.setVisible(minChildren);

        childrenValue.innerText = a + "";
        adultValue.innerText = b + "";
        this.homeSearch_editGuest();
    }

    homeSearch_reduceAdult = () =>{
        var adultValue = document.getElementById("homeSearch_adultValue") as HTMLElement;
        var a = parseInt(adultValue.innerText);
        var childrenValue = document.getElementById("homeSearch_childrenValue") as HTMLElement;
        var b = parseInt(childrenValue.innerText);
        var infantValue = document.getElementById("homeSearch_infantValue") as HTMLElement;
        var c = parseInt(infantValue.innerText);

        if((b != 0 || c != 0) && a == 1){
            return;
        }
        else if(( c !=0 || b!=0 )&& a == 2){
            var minButton = document.getElementById("homeSearch_adultMin") as HTMLElement;
            this.setInvisible(minButton);
        }
        a-=1;
        if(a <= 0){
            a = 0;
            var minButton = document.getElementById("homeSearch_adultMin") as HTMLElement;
            this.setInvisible(minButton);
        }
        var addButton = document.getElementById("homeSearch_adultPlus") as HTMLElement;
        this.setVisible(addButton);
        var chButton = document.getElementById("homeSearch_childrenPlus") as HTMLElement;
        this.setVisible(chButton);

        adultValue.innerText = a + "";
        this.homeSearch_editGuest();
    }
    homeSearch_editGuest = () =>{
        var adultValue = document.getElementById("homeSearch_adultValue") as HTMLElement;
        var a = parseInt(adultValue.innerText);
        var childrenValue = document.getElementById("homeSearch_childrenValue") as HTMLElement;
        var b = parseInt(childrenValue.innerText);
        var infantValue = document.getElementById("homeSearch_infantValue") as HTMLElement;
        var c = parseInt(infantValue.innerText);
        var guestValue = document.getElementById("homeSearch_guestValue") as HTMLElement;
        if(a+b == 0){
            guestValue.innerText  = "Guests";
            guestValue.style.color = '#767676';
        }
        else if(a+b >= 1){
            guestValue.innerText  = a+b + " guest";
            guestValue.style.color = '#424242';
            if(a+b > 1)
            guestValue.innerText  += "s";
        }

        if(c > 0){
            guestValue.innerText  += ", " + c + " infant";
            if(c > 1) guestValue.innerText  += "s";
        }
    }

    setVisible(element : HTMLElement){
        element.style.border = "1px solid rgba(0, 132, 137,1)";
        element.style.color = "rgba(0, 132, 137, 1)";
    }

    setInvisible(element : HTMLElement){
        element.style.border = "1px solid rgba(0, 132, 137,0.3)";
        element.style.color = "rgba(0, 132, 137, 0.3)";
    }

    homeSearch_addAdult = () => {
        var childrenValue = document.getElementById("homeSearch_childrenValue") as HTMLElement;
        var adultValue = document.getElementById("homeSearch_adultValue") as HTMLElement;
        var a = parseInt(childrenValue.innerText);
        var b = parseInt(adultValue.innerText)+1;
        var addAdult = document.getElementById("homeSearch_adultPlus") as HTMLElement;
        var addChildren = document.getElementById("homeSearch_childrenPlus") as HTMLElement;
        if(a + b >= 16){
            b = 16-a;
            this.setInvisible(addAdult);
            this.setInvisible(addChildren);
        }
        else{
            this.setVisible(addAdult);
            this.setVisible(addChildren);
        }
        var minAdult = document.getElementById("homeSearch_adultMin") as HTMLElement;
        this.setVisible(minAdult);
        adultValue.innerText = b + "";
        this.homeSearch_editGuest();
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
                                <input type="search" name="" id="" className="homeSearchLocationWhere_Input" placeholder="Anywhere"/>
                            </div>
                        </div>
                        {/* CheckIn and CheckOut */}
                        <div className="homeSearchCheck">
                            <div className="homeSearchCheck_in">
                                <div className="homeSearchCheckIn_text">
                                    <label htmlFor="search_checkInInput">CHECK-IN</label>
                                </div>
                                <div className="homeSearchCheckInWrapper">
                                    <input className="homeSearchCheckIn_Input" 
                                    type="date" name="search_checkInInput" 
                                    id="search_txtCheckIn" placeholder="mm/dd/yyyy"/>
                                </div>
                            </div>
                            <div className="homeSearchCheck_out">
                                <div className="homeSearchCheckOut_text">
                                    <label htmlFor="">CHECKOUT</label>
                                </div>
                                <div className="homeSearchCheckOutWrapper">
                                    <input className="homeSearchCheckOut_Input" 
                                    type="date" name="search_checkInInput" 
                                    id="search_txtCheckIn" placeholder="mm/dd/yyyy"/>
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
                                <button onClick={this.homeSearch_displayGuest}>
                                    <span id="homeSearch_guestValue">
                                        Guests
                                    </span>
                                    <div className="homeSearchGuest_svgWrapper">
                                        <img src={downArrow} alt=""/>
                                    </div>                                    
                                </button>
                                {/* When button click, it will display(adding guest) */}
                                <div className = "homeSearch_addGuestWrapper">
                                    <div className="homeSearch_addGuest">
                                        <div className="homeSearch_addGuestContent">
                                            <div className="homeSearch_addGuestContent_adult">
                                                <div>
                                                    <div className="homeSearch_addGuestContent_Left">
                                                        Adults
                                                    </div>
                                                    <div className="homeSearch_addGuestContent_Right">
                                                        <div className="homeSearch_addGuestContent_RightLeft" id="homeSearch_adultMin" onClick={this.homeSearch_reduceAdult}>
                                                            -
                                                        </div>
                                                        <div className="homeSearch_addGuestContent_RightMiddle" id="homeSearch_adultValue">
                                                            0
                                                        </div>
                                                        <div className="homeSearch_addGuestContent_RightRight" id="homeSearch_adultPlus" onClick={this.homeSearch_addAdult}>
                                                            +
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="homeSearch_addGuestContent_children">
                                                <div>
                                                    <div className="homeSearch_addGuestContent_Left">
                                                        <div>
                                                            Children
                                                        </div>
                                                        {/* <div>
                                                            Ages 2-12
                                                        </div> */}
                                                    </div>
                                                    <div className="homeSearch_addGuestContent_Right">
                                                        <div className="homeSearch_addGuestContent_RightLeft" id="homeSearch_childrenMin" onClick={this.homeSearch_reduceChildren}>
                                                            -
                                                        </div>
                                                        <div className="homeSearch_addGuestContent_RightMiddle" id="homeSearch_childrenValue">
                                                            0
                                                        </div>
                                                        <div className="homeSearch_addGuestContent_RightRight" id="homeSearch_childrenPlus" onClick={this.homeSearch_addChildren}>
                                                            +
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="homeSearch_addGuestContent_infant">
                                                <div>
                                                <div className="homeSearch_addGuestContent_Left">
                                                        <div>
                                                            Infant
                                                        </div>
                                                    </div>
                                                    <div className="homeSearch_addGuestContent_Right">
                                                        <div className="homeSearch_addGuestContent_RightLeft" id="homeSearch_infantMin" onClick={this.homeSearch_reduceInfant}>
                                                            -
                                                        </div>
                                                        <div className="homeSearch_addGuestContent_RightMiddle" id="homeSearch_infantValue">
                                                            0
                                                        </div>
                                                        <div className="homeSearch_addGuestContent_RightRight" id="homeSearch_infantPlus" onClick={this.homeSearch_addInfant}>
                                                            +
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="homeSearch_addGuestButton">
                                            <span id="homeSearch_addGuestButton_apply" onClick={this.homeSearch_displayGuest}>
                                                Apply
                                            </span>
                                        </div>
                                    </div>
                                </div>
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