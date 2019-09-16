import React from "react"
import Header from "../Header/Header"
import axios from "axios"
import "./ChatDetail.scss"

export default class ChatDetail extends React.Component{
    state = {
        data:{
            _id:'',
            experience_category:'asd',
            address:{suburb:''},
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
            }
        },
        place:{
            _id:'',
            price:0,
            cleaning_fee:0,
            service_fee:0,
            host:{
                host_location:'',
                host_name:'',
                host_thumbnail_url:'',
            },
            reviews:[]
        }
    }
    componentWillMount(){
        if(localStorage.getItem('UserID') == "" || localStorage.getItem('UserID') == null){
            window.location.href = "/";
        }
        // if(localStorage.getItem('host_id') == "" || localStorage.getItem('host_id') == null){
        //     window.location.href = "/";
        // }
        if((localStorage.getItem('exp_id') == "" || localStorage.getItem('exp_id') == null) && (localStorage.getItem('place_id') == "" || localStorage.getItem('place_id') == null)){
            window.location.href = "/";
        }

        axios.get('http://backendtpaweb.herokuapp.com/api/rooms/' + localStorage.getItem('place_id'))
        .then(res => {
            this.setState(
                    {
                        place: res.data
                    }
                )
            }
        )
        
        // axios.get('http://backendtpaweb.herokuapp.com/api/experience/' + localStorage.getItem('exp_id'))
        // .then(res => {
        //     this.setState(
        //             {
        //                 data: res.data
        //             }
        //         )
        //     }
        // )
        
    }
    toggleBtn(){
        var btn = document.getElementById('txtMessage') as HTMLInputElement;
        if(btn.value == ""){
            (document.getElementById('btnMessage') as HTMLElement).style.display = "none";
        }
        else
        (document.getElementById('btnMessage') as HTMLElement).style.display = "block";

    }
    render(){
        return(
            <div>
                <div className="chatD_header">
                <Header />
                </div>
                <div className="chatD_ContentWrapper">
                    <div className="chatD_Content">
                        <div className="chatD_detailWrapper">

                            <div className="chatD_hostDetail">
                                <div className="chatD_hostImg">
                                    <img src={this.state.place.host.host_thumbnail_url} alt=""/>
                                </div>
                                <div className="chatD_hostName">{this.state.place.host.host_name}</div>
                                <div className="chatD_hostLocation">{this.state.place.host.host_location}</div>
                                <div className="chatD_hostReviews">{this.state.place.reviews.length} Reviews</div>
                            </div>

                            <div className="chatD_paymentDetail">
                                <div className="chatD_paymentTitle">Payment</div>
                                <div className="chatD_payment">
                                    <div>${this.state.place.price} x 1 night</div>
                                    <div>${this.state.place.price*1}</div>
                                </div>
                                <div className="chatD_payment">
                                    <div>Cleaning fee</div>
                                    <div>${this.state.place.cleaning_fee}</div>
                                </div>
                                <div className="chatD_payment">
                                    <div>Service fee</div>
                                    <div>${/*{this.state.place.service_fee}*/}0</div>
                                </div>
                                <hr/>
                                <div className="chatD_payment">
                                    <div>Total</div>
                                    <div>${this.state.place.cleaning_fee  + (this.state.place.price*1)}</div>
                                </div>
                            </div>

                        </div>

                        <div className="chatD_chatContentWrapper">
                            <div className="chatD_chatContent">
                                <div className="chatD_chatC">
                                    <div className="chatD_left">
                                        <div className="chatD_left_image">
                                            <img src={this.state.place.host.host_thumbnail_url} alt=""/>
                                        </div>
                                        <div className="chatD_left_message">asdasdasdadpadadask</div>
                                        <div className="chatD_left_time">16/09/2019 13:13 P.M.</div>
                                    </div>
                                    <div className="chatD_left">
                                        <div className="chatD_left_image">
                                            <img src={this.state.place.host.host_thumbnail_url} alt=""/>
                                        </div>
                                        <div className="chatD_left_message">asdasdasdadpadadask</div>
                                        <div className="chatD_left_time">16/09/2019 13:13 P.M.</div>
                                    </div>
                                    <div className="chatD_left">
                                        <div className="chatD_left_image">
                                            <img src={this.state.place.host.host_thumbnail_url} alt=""/>
                                        </div>
                                        <div className="chatD_left_message">asdasdasdadpadadask</div>
                                        <div className="chatD_left_time">16/09/2019 13:13 P.M.</div>
                                    </div>
                                    <div className="chatD_left">
                                        <div className="chatD_left_image">
                                            <img src={this.state.place.host.host_thumbnail_url} alt=""/>
                                        </div>
                                        <div className="chatD_left_message">asdasdasdadpadadask</div>
                                        <div className="chatD_left_time">16/09/2019 13:13 P.M.</div>
                                    </div>
                                    <div className="chatD_left">
                                        <div className="chatD_left_image">
                                            <img src={this.state.place.host.host_thumbnail_url} alt=""/>
                                        </div>
                                        <div className="chatD_left_message">asdasdasdadpadadask</div>
                                        <div className="chatD_left_time">16/09/2019 13:13 P.M.</div>
                                    </div>
                                    <div className="chatD_left">
                                        <div className="chatD_left_image">
                                            <img src={this.state.place.host.host_thumbnail_url} alt=""/>
                                        </div>
                                        <div className="chatD_left_message">asdasdasdadpadadask</div>
                                        <div className="chatD_left_time">16/09/2019 13:13 P.M.</div>
                                    </div>
                                    <div className="chatD_right">
                                        <div className="chatD_right_image">
                                            <img src={this.state.place.host.host_thumbnail_url} alt=""/>
                                        </div>
                                        <div className="chatD_right_message">asdasdasdadpadadask</div>
                                        <div className="chatD_right_time">16/09/2019 13:13 P.M.</div>
                                    </div>
                                    <div className="chatD_left">
                                        <div className="chatD_left_image">
                                            <img src={this.state.place.host.host_thumbnail_url} alt=""/>
                                        </div>
                                        <div className="chatD_left_message">asdasdasdadpadadask</div>
                                        <div className="chatD_left_time">16/09/2019 13:13 P.M.</div>
                                    </div>
                                    <div className="chatD_right">
                                        <div className="chatD_right_image">
                                            <img src={this.state.place.host.host_thumbnail_url} alt=""/>
                                        </div>
                                        <div className="chatD_right_message">asdasdasdadpadadask</div>
                                        <div className="chatD_right_time">16/09/2019 13:13 P.M.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="chatD_chatMessage">
                                <textarea name="" id="txtMessage" cols={30} rows={3} onInput={this.toggleBtn}></textarea>
                                <img src={this.state.place.host.host_thumbnail_url} alt=""/>
                                <div className="chatD_chatMessageBottom">
                                    <button id="btnMessage">
                                        Send
                                    </button>
                                    <button id="btnUploadImage">
                                        Upload Image
                                    </button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}