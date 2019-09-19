import React from "react"
import Header from "../Header/Header"
import axios from "axios"
import "./BookingHistory.scss"

export default class BookingHistory extends React.Component{
    state = {
        data:[{
            BookingsID:0,
            Name : '',
            Occurence : '',
            TotalFee : '',
            Type: '',
            Status: ''
        }],
        isLoading:true,
    }
    componentWillMount(){
        axios.get('http://backendtpaweb.herokuapp.com/api/select-booking/' + localStorage.getItem('UserID'))
            .then(res => {
                this.setState(
                    {
                        data:res.data,
                        isLoading: false,
                    }
                )
                console.log(res.data);
            }
        )
    }
    deleteBooking(i : number, index:number){
        axios({
            url: 'http://backendtpaweb.herokuapp.com/api/delete-booking', 
            method : "POST",
            data : {
                "BookingsID" : Number(i),
                "UserID" : Number(localStorage.getItem('UserID')),
        },
        headers:{"Content-Type": "application/x-www-form-urlencoded"}
        }
        );
        var a = this.state.data;
        a.splice(index,1);
        this.setState({
            data : a,
        })
    }
    colorStar = (index:number, i : number) => {
        var stars = (document.getElementsByClassName(index + "") as HTMLCollectionOf<HTMLElement>);
        for(let a = 1; a <= 5; a++){
            if(a <= i)
            stars[a-1].style.color = "#008489";
            else
            stars[a-1].style.color = "grey";
        }
    }
    render(){
        if(this.state.isLoading){
            return(<div>Loading...</div>);
        }
        return(
            <div className="BookingHistory">
                <div>
                    <Header />
                </div>
                <div className="BHistory_contentWrapper">
                    <div className="BHistory_content">
                        <div className="BHistory_header">
                            <div>Booking History</div>
                        </div>
                        <div className="BHistory_desc">
                            {this.state.data.map((e, index) => {
                                return(
                                    <div className="BHistory_card">
                                        <div className="BHistory_leftCard">
                                            <div className="BHistory_name">{e.Name}</div>
                                            <div className="BHistory_info">Total fee : ${e.TotalFee}</div>
                                            <div className="BHistory_info">Type : {e.Type}</div>
                                            <div className={"BHistory_info " + e.Status}>Status : {e.Status}</div>
                                            <div className= {"BHistory_rateReview" + e.Status}>
                                                <div className="BHistory_rate">
                                                    <div className={"BHistory_star " + index} onClick={() => this.colorStar(index,1)}>
                                                        &#9733;
                                                    </div>
                                                    <div className={"BHistory_star " + index} onClick={() => this.colorStar(index,2)}>
                                                        &#9733;
                                                    </div>
                                                    <div className={"BHistory_star " + index} onClick={() => this.colorStar(index,3)}>
                                                        &#9733;
                                                    </div>
                                                    <div className={"BHistory_star " + index} onClick={() => this.colorStar(index,4)}>
                                                        &#9733;
                                                    </div>
                                                    <div className={"BHistory_star " + index} onClick={() => this.colorStar(index,5)}>
                                                        &#9733;
                                                    </div>
                                                </div>
                                                <div className="BHistory_review">
                                                    Give Review <br/>
                                                    <textarea name="" id="" cols={30} rows={10}></textarea>
                                                </div>
                                                <button className="BHistory_SubmitReview">Submit Review</button>
                                            </div>
                                            <div className="BHistory_date">Booked at {e.Occurence}</div>
                                        </div>
                                        <div className="BHistory_rightCard">
                                            <button className={"btnCancel" + e.Status} onClick={() => this.deleteBooking(e.BookingsID, index)}>Cancel</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}