import React, { Component } from 'react'
import Header from "../Header/Header"
import "./BookingPlace.scss"

interface IProps{
    name: string,
    url: string,
}
export default class BookingPlace extends Component<IProps>{
    state={
        guestCount : 1,
        data:{
            name: this.props.name,
            url: this.props.url,
        }

    }
    guests = () => {
        var x: any = []
        for(let i = 1; i < this.state.guestCount; i++){
            x.push(<div className="BExp_GuestInfoContent">
                <div className="BExp_GuestInfoTitle">
                    {"Guest " + (i+1)}
                </div>
                <div className="BExp_GuestInfoUsername">
                    <div className="BExp_GuestInfoFirst">
                        <div>First name</div>
                        <div><input type="text" name="" id=""/></div>
                    </div>
                    <div className="BExp_GuestInfoSecond">
                        <div>Second name</div>
                        <div><input type="text" name="" id=""/></div>
                    </div>
                </div>
                <div className="BExp_GuestInfoEmail">
                    <div>Email</div>
                    <div><input type="email" name="" id=""/></div>
                </div>
            </div>)
        }
        // console.log(x)
        return x;
    }
    reduceGuest = () => {
        // var count = (document.getElementById('guestCount') as HTMLSelectElement).value;
        this.setState({
            guestCount: this.state.guestCount-1,
        })
    }
    addGuest = () => {
        // var count = (document.getElementById('guestCount') as HTMLSelectElement).value;
        this.setState({
            guestCount: this.state.guestCount+1,
        })
    }
    reduceChildren = () =>{
        var div = document.getElementById('childrenValue') as HTMLElement;
        if(div.innerText != "0"){
            var i = parseInt(div.innerText);
            div.innerText = (i-1) + "";
            (document.getElementById('guestValue') as HTMLElement).innerText = (parseInt((document.getElementById('guestValue') as HTMLElement).innerText + "") - 1) + " guests";
                this.reduceGuest();
        }
    }
    addInfant = () => {
        var div = document.getElementById('infantValue') as HTMLElement;
            if(this.state.guestCount != 10){
                var i = parseInt(div.innerText);
                div.innerText = (i+1) + "";
                (document.getElementById('guestValue') as HTMLElement).innerText = (parseInt((document.getElementById('guestValue') as HTMLElement).innerText + "") + 1) + " guests";
                    this.addGuest();
            }
    }
    reduceInfant = () => {
        var div = document.getElementById('infantValue') as HTMLElement;
        if(div.innerText != "0"){
            var i = parseInt(div.innerText);
            div.innerText = (i-1) + "";
            (document.getElementById('guestValue') as HTMLElement).innerText = (parseInt((document.getElementById('guestValue') as HTMLElement).innerText + "") - 1) + " guests";
                this.reduceGuest();
        }
    }
    addChildren = () => {
        var div = document.getElementById('childrenValue') as HTMLElement;
            if(this.state.guestCount != 10){
                var i = parseInt(div.innerText);
                div.innerText = (i+1) + "";
                (document.getElementById('guestValue') as HTMLElement).innerText = (parseInt((document.getElementById('guestValue') as HTMLElement).innerText + "") + 1) + " guests";
                    this.addGuest();
            }
    }
    reduceAdult = () => {
        var div = document.getElementById('adultValue') as HTMLElement;
        if(div.innerText != "1"){
            var i = parseInt(div.innerText);
            div.innerText = (i-1) + "";
            (document.getElementById('guestValue') as HTMLElement).innerText = (parseInt((document.getElementById('guestValue') as HTMLElement).innerText + "") - 1) + " guests";
                this.reduceGuest();
        }
    }
    addAdult = () => {
    var div = document.getElementById('adultValue') as HTMLElement;
        if(this.state.guestCount != 10){
            var i = parseInt(div.innerText);
            div.innerText = (i+1) + "";
            (document.getElementById('guestValue') as HTMLElement).innerText = (parseInt((document.getElementById('guestValue') as HTMLElement).innerText + "") + 1) + " guests";
                this.addGuest();
        }
    }
    toggleGuest(){
        var div = (document.getElementsByClassName('BExp_guestDropContent')[0] as HTMLElement);
        if(div.style.display == "none"){
            div.style.display = "block";
        }
        else{
            div.style.display = "none";
        }
    }
    render(){
        return(
            <div className="BP_ContentWrapper">
                <div>
                    <Header />
                </div>
                <div className="BExp_contentWrapper">
                    <div className="BExp_content">
                        <div className="BExp_contents">
                            <div className="BExp_title">
                                Who's coming?
                            </div>
                            <div className="BExp_guest">
                                Number of guests
                                <br/>
                                <div className="BExp_guestContent">
                                    <button id="guestValue" onClick={this.toggleGuest}>1 guests</button>
                                    <div className="BExp_guestDropContent">
                                        <div className="BExp_guestDrop">
                                            <div>
                                                Adults
                                            </div>
                                            <div className="BExp_guestDropRight">
                                                <div className="BExp_guestDropMinus" onClick={this.reduceAdult}>-</div>
                                                <div id="adultValue">1</div>
                                                <div className="BExp_guestDropPlus" onClick={this.addAdult}>+</div>
                                            </div>
                                        </div>
                                        <div className="BExp_guestDrop">
                                            <div>
                                                Children
                                            </div>
                                            <div className="BExp_guestDropRight">
                                                <div className="BExp_guestDropMinus" onClick={this.reduceChildren}>-</div>
                                                <div id="childrenValue">0</div>
                                                <div className="BExp_guestDropPlus" onClick={this.addChildren}>+</div>
                                            </div>
                                        </div>
                                        <div className="BExp_guestDrop">
                                            <div>
                                                Infant
                                            </div>
                                            <div className="BExp_guestDropRight">
                                                <div className="BExp_guestDropMinus" onClick={this.reduceInfant}>-</div>
                                                <div id="infantValue">0</div>
                                                <div className="BExp_guestDropPlus" onClick={this.addInfant}>+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="BExp_GuestList">
                                <div className="BExp_guestDetail">
                                    Guest details
                                </div>  
                                <div className="BExp_UserDetailWrapper">
                                    <div className="BExp_UserDetail">
                                        <div>name</div>
                                        <div><img src="" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="BExp_GuestInfo">
                                {
                                    this.guests()
                                }
                            </div>
                            <button className="btnPay">Pay</button>
                            <button className="btnPostpone">Postpone</button>
                        </div>


                        <div className="BExp_infoWrapper">
                            
                            <div className="BExp_info">
                                <div className = "BExp_infoHeader">
                                    <div className="BExp_infoName">
                                        Title
                                    </div>
                                    <div className="BExp_infoHourHost">
                                        Hours
                                        <br/>
                                        Hosted by Someone
                                    </div>
                                    <div>
                                        5.00
                                    {/* <StarRatings
                                        rating={this.state.star/this.state.data.reviews.length/2}
                                        starRatedColor="#008489"
                                        // changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension= '28px'
                                        starSpacing = '1px'
                                    /> */}
                                    </div>
                                    <img src="" alt=""/>
                                </div>    
                                <hr/>
                                <div className="BExp_date">
                                    date
                                    <br/>
                                    6:00 PM - 7:00 PM
                                </div>
                                <hr/>
                                <div className="BExp_price">
                                    <div>
                                        $Price x {this.state.guestCount} guests
                                    </div>
                                    <div>
                                        $Price * guestCount
                                    </div>
                                </div>
                                <div className="BExp_price">
                                    <div>
                                        Cleaning fee
                                    </div>
                                    <div>
                                        $50
                                    </div>
                                </div>
                                <div className="BExp_price">
                                    <div>
                                        Service fee
                                    </div>
                                    <div>
                                        $50
                                    </div>
                                </div>
                                <hr/>
                                <div className="BExp_Amenities">
                                    <div className="BExp_amenitiesTitle">Amenities</div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}