import React from "react"
import Header from "../Header/Header"
import "./ExperienceDetail.scss"
import "react-fa-icon"
import photo from "./img/oldtown.jpg"
import InstaStory from "./InstaStory/InstaStory"
import axios from 'axios'
import {RouteComponentProps, withRouter} from "react-router";

export default class ExperienceDetail extends React.Component<RouteComponentProps<any>>{
    state = {
        data:{
            _id:'',
            experience_category:'asd',
            address:{suburb:''},
            experience_title:'',
            price:0,
            estimated_total_hours:'',
            amenities:[],
            rating_star:0,
            total_rating_count:0,
            host:{
                host_language:[],
                host_about:'',
                host_thumbnail_url:'',
                host_name:'',
            },
            reviews:[{
                _id:'',
                date:'',
                listing_id:'',
                reviewer_id:'',
                reviewer_name:'',
                comments:'',
            }]
        }
    }
    componentWillMount(){
        let id: any = this.props.match.params.id
        // const { fromNotifications } = this.props.location.state
        axios.get('http://backendtpaweb.herokuapp.com/api/experience/' + id)
            .then(res => {
                this.setState(
                    {
                        data: res.data
                    }
                )
                console.log(res.data)
            }
        )
    }
    render(){
        return(
            <div className="expD_Wrapper">
            <Header />
                {/* {this.state.data.map(data => {
                   return ( */}
                        <div className="expD_ContentWrapper">
                            <div className="expD_Content">
                                <div className="expD_Insta">
                                {/* <InstaStory /> */}
                                </div>
                                <div className="expD_Description">
                                    <div className="expD_header">
                                        <div className="expD_theme">
                                            {this.state.data.experience_category}
                                        </div>
                                        <div className="expD_title">
                                            {this.state.data.experience_title} 
                                        </div>
                                        <div className="expD_location">
                                            <i className="fas fa-map-marker-alt">
                                            <span>{this.state.data.address.suburb}</span></i>
                                        </div>
                                        <div className="expD_time">
                                            <i className="fas fa-clock"><span>{this.state.data.estimated_total_hours}</span></i>
                                        </div>
                                        <div className="expD_benefit">
                                            <i className="fa fa-list-alt"><span>{this.state.data.amenities[0]}, {this.state.data.amenities[1]}, {this.state.data.amenities[2]}</span></i>
                                        </div>  
                                        <div className="expD_language">
                                            <i className="fas fa-comments"><span>Offered in {this.state.data.host.host_language[0]}</span></i>
                                        </div>  
                                    </div>
                                    <hr/>
                                    <div className="expD_aboutWrapper">
                                        <div className="expD_about">
                                            <div className="expD_aboutTitle">About your host</div>
                                            <div className="expD_aboutDescription">{this.state.data.host.host_about}</div>
                                        </div>
                                        <div className="expD_about_img">
                                            <img src={this.state.data.host.host_thumbnail_url} alt=""/>
                                            <div className="expD_about_name">
                                            {this.state.data.host.host_name}
                                            </div>
                                            <div className="expD_about_contact">
                                            Contact Host
                                            </div>
                                        </div>

                                    </div>
                                    <div className="expD_provide">
                                        <div className="expD_provideTitle">What I'll provide</div>
                                        {this.state.data.amenities.map(e => {
                                            return(
                                                <div>{e}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* )
                })} */}
               
               <div className="expD_review">
                    <div className="expD_reviewLeft">
                        <div className="expD_reviewLeftTitle">Guest Reviews</div>
                        <div className="expD_reviewLeftRating">
                            <div className="expD_reviewLeftNum">
                                {(Math.round(this.state.data.rating_star/this.state.data.total_rating_count*100)/100).toFixed(2)}
                            </div>
                            <div className="expD_reviewLeftStar">
                                &#9733;&#9733;&#9733;&#9733;&#9733;
                            </div>
                        </div>
                    </div>
                    <div className="expD_reviewRight">
                            {this.state.data.reviews.map(rev =>{
                                return(
                                    <div className="expD_reviewRightContent">
                                        <div className="expD_reviewRightName">
                                            {rev.reviewer_name}
                                        </div>
                                        <div className="expD_reviewRightContent_Content">
                                            {rev.comments}
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
               </div>
            </div>
        )
    }
}