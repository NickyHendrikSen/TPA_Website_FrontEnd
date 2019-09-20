import React from "react"
import BookingPlace from "./BookingPlace"
import axios from "axios"

export default class BookingPlaceLoader extends React.Component{
    state ={
        dayCount:0,
        CheckIn:'',
        CheckOut:'',
        data:{
            cleaning_fee:0,
            price:0,
            name:'',
            host:{
                host_name:'',
                host_thumbnail_url:'',
            },
            images:{
                picture_url:'',
            },
            review_scores:{
                review_scores_rating:0,
            }

        },
        user:{
            UserThumbnailURL:'',
            Username:'',
        },
        isLoading:true,
    }
    componentWillMount(){
        var checkIn = new Date(localStorage.getItem('CheckIn') + "" );
        var checkOut = new Date(localStorage.getItem('CheckOut') + "");
        // Date.comp
        var inMonth = checkIn.getMonth().toString() == "1" ? "Jan" : checkIn.getMonth().toString() == "2" ? "Feb" : checkIn.getMonth().toString() == "3" ? "Mar" : checkIn.getMonth().toString() == "4" ? "Apr" : checkIn.getMonth().toString() == "5" ? "May" : checkIn.getMonth().toString() == "6" ? "Jun" : checkIn.getMonth().toString() == "7" ? "Jul" : checkIn.getMonth().toString() == "8" ? "Aug" : checkIn.getMonth().toString() == "9" ? "Sep" : checkIn.getMonth().toString() == "10" ? "Oct" : checkIn.getMonth().toString() == "11" ? "Nov" : "Dec";
        var outMonth = checkOut.getMonth().toString() == "1" ? "Jan" : checkOut.getMonth().toString() == "2" ? "Feb" : checkOut.getMonth().toString() == "3" ? "Mar" : checkOut.getMonth().toString() == "4" ? "Apr" : checkOut.getMonth().toString() == "5" ? "May" : checkOut.getMonth().toString() == "6" ? "Jun" : checkOut.getMonth().toString() == "7" ? "Jul" : checkOut.getMonth().toString() == "8" ? "Aug" : checkOut.getMonth().toString() == "9" ? "Sep" : checkOut.getMonth().toString() == "10" ? "Oct" : checkOut.getMonth().toString() == "11" ? "Nov" : "Dec";
        this.setState({
            CheckIn: checkIn.getDate() + " " + inMonth + " " + checkIn.getFullYear(),
            CheckOut: checkOut.getDate() + " " + outMonth + " " + checkOut.getFullYear(),
            dayCount: (checkOut.getTime() - checkIn.getTime())/ (1000 * 3600 * 24),
        })
        axios.get('http://backendtpaweb.herokuapp.com/api/rooms/' + localStorage.getItem('PlaceID'))
        .then(res => {
            this.setState(
                {
                    data: res.data,
                    isLoading: false
                }
                )
            }
       )
       axios.get('http://backendtpaweb.herokuapp.com/api/users/' + localStorage.getItem('UserID'))
        .then(res => {
            this.setState(
                {
                    user: res.data
                }
                )
            }
       )
    }
    render(){
        if(this.state.isLoading){
            return(
                <div>Loading...</div>
            )
        }
        return(
            <div>
                <BookingPlace
                    name = {this.state.user.Username}
                    place_name={this.state.data.name}
                    place_url={this.state.data.images.picture_url}
                    host_name = {this.state.data.host.host_name}
                    user_url = {"https://" + this.state.user.UserThumbnailURL}
                    average_star = {this.state.data.review_scores.review_scores_rating/20}
                    check_in = {this.state.CheckIn}
                    check_out = {this.state.CheckOut}
                    dayCount = {this.state.dayCount}
                    adult = {Number(localStorage.getItem('adultValue'))}
                    children = {Number(localStorage.getItem('childrenValue'))}
                    infant = {Number(localStorage.getItem('infantValue'))}
                    price = {this.state.data.price}
                    service_fee = {this.state.data.price*this.state.dayCount*10/100}
                    cleaning_fee = {this.state.data.cleaning_fee}


                />
            </div>
        )
    }
}