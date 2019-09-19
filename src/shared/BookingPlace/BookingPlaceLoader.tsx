import React from "react"
import BookingPlace from "./BookingPlace"

export default class BookingPlaceLoader extends React.Component{
    render(){
        return(
            <div>
                <BookingPlace
                    name = "Jo"
                    place_name="asd"
                    place_url="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    host_name = "Someone"
                    user_url = {"https://" + "images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                    average_star = {3.5}
                    check_in = "24 May 2019"
                    check_out = "26 May 2019"
                    dayCount = {2}
                    adult = {1}
                    children = {2}
                    infant = {3}
                    price = {200}
                    service_fee = {20}
                    cleaning_fee = {50}


                />
            </div>
        )
    }
}