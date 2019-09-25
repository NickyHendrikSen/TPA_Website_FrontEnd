import React from "react"
import Header from "../Header/Header"
import "./BookingExperience.scss"
import axios from "axios"
import StarRatings from "react-star-ratings"
import { thisExpression } from "@babel/types";

export default class BookingExperience extends React.Component{
    state ={
        date:'',
        guestCount:1,
        isLoading:true,
        star:0,
        data:{
            experience_category:'asd',
            address:{
                suburb:'',
                location:{
                    type:'',
                    coordinates:[],
                }
            },
            experience_title:'',
            experience_detail:'',
            price:0,
            estimated_total_hours:'',
            amenities:[],
            rating_star:0,
            total_rating_count:0,
            should_bring:[],
            host:{
                host_id:'',
                host_language:'',
                host_about:'',
                host_thumbnail_url:'',
                host_name:'',
                host_location:'',
                host_response_rate:'',
                host_response_time:'',
                total_host_review:'',
                host_join_date:''
            },
            reviews:[{
                _id:'',
                date:'',
                listing_id:'',
                reviewer_id:'',
                reviewer_name:'',
                comments:'',
                reviewer_score:0,
                reviewer_thumbnail_url:'',
            }],
            Images:[]
        },
        user:{
            Username:'',
            UserThumbnailURL:'',
        }
    }
    componentWillMount(){
        if(localStorage.getItem('UserID') == null || localStorage.getItem('UserID') == "")
        {
            window.location.href = "/";
        }
        var date = localStorage.getItem('ExperienceDate') + "";
        var year = date.split('-')[0];
        var month = date.split('-')[1];
        month = month == "01" ? "January" : month == "02" ? "February" : month == "03" ? "March" : "04" ? "April" : month == "05" ? "May" : month == "06" ? "June" : "07" ? "July" : month == "08" ? "August" : month == "09" ? "September" : "10" ? "October" : month == "11" ? "November" : month == "12" ? "December" : "Loading...";
        var day = date.split('-')[2];
        this.setState({
            date : day + " " + month + " " + year,
        })

        axios.get('http://backendtpaweb.herokuapp.com/api/experience/' + localStorage.getItem('ExperienceID'))
            .then(res => {
                let total = 0;
                    for(let j = 0; j < res.data.reviews.length; j++){
                        total += res.data.reviews[j].reviewer_score;
                        // console.log(total);
                    }
                this.setState(
                    {
                        star: total,
                    }
                )
                this.setState(
                    {
                        data: res.data,
                    }
                )
                console.log(res.data);
            }
        )
        axios.get('http://localhost:27017/api/users/' + localStorage.getItem('UserID'))
            .then(res => {
                this.setState(
                    {
                        user:res.data,
                        isLoading: false,
                    }
                )
                console.log(res.data);
            }
        )
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
    insertBooking = (status:string) => {
        axios({
            url: 'http://localhost:27017/api/insert-booking', 
            method : "POST",
            data : {
                "UserID" : Number(localStorage.getItem('UserID') + ""),
                "Status" : status,
                "TotalFee" : Number(this.state.data.price*this.state.guestCount),
                "type"  : 'Experience',
                "BookingName" : this.state.data.experience_title + "",
        },
        headers:{"Content-Type": "application/x-www-form-urlencoded"}
        }
        );
        alert('Experience Booked');
        window.history.back();

    }
    render(){
        console.log(this.state.data);
        if(this.state.isLoading){
            return(<div>Loading...</div>)
        }
        return(
            <div className="BExp">
                <div className="BExp_header">
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
                                        <div>{this.state.user.Username}</div>
                                        <div><img src={"http://" + this.state.user.UserThumbnailURL} alt=""/></div>
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
                                        {this.state.data.experience_title}
                                    </div>
                                    <div className="BExp_infoHourHost">
                                        {this.state.data.estimated_total_hours}
                                        <br/>
                                        Hosted by {this.state.data.host.host_name}
                                    </div>
                                    <div>
                                    {(Math.round(this.state.star/this.state.data.reviews.length/2*100)/100).toFixed(2)}
                                    <StarRatings
                                    rating={this.state.star/this.state.data.reviews.length/2}
                                    starRatedColor="#008489"
                                    // changeRating={this.changeRating}
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension= '28px'
                                    starSpacing = '1px'
                                    />
                                    </div>
                                    <img src={this.state.data.Images[0]} alt=""/>
                                </div>    
                                <hr/>
                                <div className="BExp_date">
                                    {this.state.date}
                                    <br/>
                                    6:00 PM - 7:00 PM
                                </div>
                                <hr/>
                                <div className="BExp_price">
                                    <div>
                                        ${this.state.data.price} x {this.state.guestCount} guests
                                    </div>
                                    <div>
                                        ${this.state.data.price*this.state.guestCount}
                                    </div>
                                </div>
                                <hr/>
                                <div className="BExp_Amenities">
                                    <div className="BExp_amenitiesTitle">Amenities</div>
                                    {this.state.data.amenities.map(e => {
                                        return(
                                            <div className="BExp_amenitiesList">{e}</div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}