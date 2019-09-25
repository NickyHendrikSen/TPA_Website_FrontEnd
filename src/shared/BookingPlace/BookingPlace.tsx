import React, { Component } from 'react'
import Header from "../Header/Header"
import axios from "axios"
import StarRatings from "react-star-ratings"
import "./BookingPlace.scss"

interface IProps{
    name: string,
    host_name: string,
    place_name: string,
    place_url: string,
    user_url: string,
    average_star:number,
    check_in:string,
    check_out:string,
    dayCount:number,
    adult:number,
    children:number,
    infant:number,
    price:number, //Price per night
    service_fee:number,
    cleaning_fee:number,
    
}
export default class BookingPlace extends Component<IProps>{
    state={
        guestCount : this.props.adult + this.props.children + this.props.infant,
        data:{
            name: this.props.name,
            host_name: this.props.host_name,
            place_name : this.props.place_name,
            place_url: this.props.place_url,
            user_url: this.props.user_url,
            average_star: this.props.average_star,
            check_in: this.props.check_in,
            check_out: this.props.check_out,
            dayCount: this.props.dayCount,
            adult: this.props.adult,
            children: this.props.children,
            infant: this.props.infant,
            price: this.props.price,
            cleaning_fee: this.props.cleaning_fee,
            service_fee: this.props.service_fee,
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
        if(div.innerText != "0"){
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
    insertBooking = (status:string) => {
        console.log((this.state.data.price*this.state.data.dayCount) + (this.state.data.cleaning_fee) + (this.state.data.service_fee));
        axios({
            url: 'http://localhost:27017/api/insert-booking', 
            method : "POST",
            data : {
                "UserID" : Number(localStorage.getItem('UserID') + ""),
                "Status" : status,
                "TotalFee" : Number(parseInt((this.state.data.price*this.state.data.dayCount) + (this.state.data.cleaning_fee) + (this.state.data.service_fee)+ "")),
                "type"  : 'Place',
                "BookingName" : this.state.data.place_name + "", 
        },
        headers:{"Content-Type": "application/x-www-form-urlencoded"}
        }
        );
        alert('Place Booked');
        // window.history.back();

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
                                    <button id="guestValue" onClick={this.toggleGuest}>{this.state.guestCount} guests</button>
                                    <div className="BExp_guestDropContent">
                                        <div className="BExp_guestDrop">
                                            <div>
                                                Adults
                                            </div>
                                            <div className="BExp_guestDropRight">
                                                <div className="BExp_guestDropMinus" onClick={this.reduceAdult}>-</div>
                                                <div id="adultValue">{this.state.data.adult}</div>
                                                <div className="BExp_guestDropPlus" onClick={this.addAdult}>+</div>
                                            </div>
                                        </div>
                                        <div className="BExp_guestDrop">
                                            <div>
                                                Children
                                            </div>
                                            <div className="BExp_guestDropRight">
                                                <div className="BExp_guestDropMinus" onClick={this.reduceChildren}>-</div>
                                                <div id="childrenValue">{this.state.data.children}</div>
                                                <div className="BExp_guestDropPlus" onClick={this.addChildren}>+</div>
                                            </div>
                                        </div>
                                        <div className="BExp_guestDrop">
                                            <div>
                                                Infant
                                            </div>
                                            <div className="BExp_guestDropRight">
                                                <div className="BExp_guestDropMinus" onClick={this.reduceInfant}>-</div>
                                                <div id="infantValue">{this.state.data.infant} </div>
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
                                        <div>{this.state.data.name}</div>
                                        <div><img src={this.state.data.user_url} alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="BExp_GuestInfo">
                                {
                                    this.guests()
                                }
                            </div>
                            <button className="btnPay" onClick={() => this.insertBooking("Paid")}>Pay</button>
                            <button className="btnPostpone" onClick={() => this.insertBooking("Postponed")}>Postpone</button>
                        </div>


                        <div className="BExp_infoWrapper">
                            
                            <div className="BExp_info">
                                <div className = "BExp_infoHeader">
                                    <div className="BExp_infoName">
                                        {this.state.data.place_name}
                                    </div>
                                    <div className="BExp_infoHourHost">
                                        <br/>
                                        Hosted by {this.state.data.host_name}
                                    </div>
                                    <div>
                                        {this.state.data.average_star.toFixed(2)}
                                    <StarRatings
                                        rating={this.state.data.average_star}
                                        starRatedColor="#008489"
                                        // changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension= '28px'
                                        starSpacing = '1px'
                                    />
                                    </div>
                                    <img src={this.state.data.place_url} alt=""/>
                                </div>    
                                <hr/>
                                <div className="BExp_date">
                                    Check in : {this.state.data.check_in}
                                    <br/>
                                    Check out : {this.state.data.check_out}
                                </div>
                                <hr/>
                                <div className="BExp_price">
                                    <div>
                                        ${this.state.data.price} x {this.state.data.dayCount} nights
                                    </div>
                                    <div>
                                        ${this.state.data.price*this.state.data.dayCount}
                                    </div>
                                </div>
                                <div className="BExp_price">
                                    <div>
                                        Cleaning fee
                                    </div>
                                    <div>
                                        ${this.state.data.cleaning_fee}
                                    </div>
                                </div>
                                <div className="BExp_price">
                                    <div>
                                        Service fee
                                    </div>
                                    <div>
                                        ${this.state.data.service_fee}
                                    </div>
                                </div>
                                <hr/>
                                <div className="BExp_priceTotal">
                                    <div>
                                        Total
                                    </div>
                                    <div>
                                        ${(this.state.data.price*this.state.data.dayCount) + (this.state.data.cleaning_fee) + (this.state.data.service_fee)}
                                    </div>
                                </div>
                                <hr/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}