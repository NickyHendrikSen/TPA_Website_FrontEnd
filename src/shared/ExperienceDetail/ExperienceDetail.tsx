import React from "react"
import Header from "../Header/Header"
import "./ExperienceDetail.scss"
import "react-fa-icon"
import photo from "./img/oldtown.jpg"
import InstaStory from "./InstaStory/InstaStory"
import axios from 'axios'
import Stories from 'react-insta-stories'
import StarRatings from 'react-star-ratings';
import {RouteComponentProps, withRouter} from "react-router";

export default class ExperienceDetail extends React.Component<RouteComponentProps<any>>{
    refVal:any
    state = {
        total_rating:0,
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
                reviewer_score:0,
                reviewer_thumbnail_url:'',
            }],
            Images:[{url:'',}]
        }
    }


    stories = (story:any) =>{
        this.refVal = story
    }
    instaToggle(){
        var btn = document.getElementsByClassName('expD_Insta_Button')[0] as HTMLElement;
        console.log(btn.innerHTML)
        if(btn.innerText == "Pause")
        {
            btn.innerHTML = "Play"   
            this.refVal.pause();
        }
        else{
            btn.innerHTML = "Pause"   
            this.refVal.play();
        }
    }
    starLoading(){
    //     var div = document.getElementsByClassName('expD_reviewRightStar')[0] as HTMLElement;
    //     for(let i = 1; i <= this.state.hos)
    //     <div className="expD_reviewRightStarColor">&#x2605;
    //     <div className="expD_reviewRightStarGray">&#x2605;</div>
    // </div>
    }
    componentWillMount(){
        this.refVal = React.createRef();
        let id: any = this.props.match.params.id
        // const { fromNotifications } = this.props.location.state
        axios.get('http://backendtpaweb.herokuapp.com/api/experience/' + id)
            .then(res => {
                this.setState(
                    {
                        data: res.data,
                        total_rating: res.data.rating_star/res.data.total_rating_count
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
                                    <Stories ref={this.stories}
                                        stories={this.state.data.Images}
                                        defaultInterval={1500}
                                        width={390}
                                        height={517}
                                        loop={true}
                                    />
                                    <div className="expD_Insta_Button" onClick={this.instaToggle.bind(this)}>
                                        Pause
                                    </div>
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
                                <StarRatings
                                    rating={this.state.total_rating}
                                    starRatedColor="#008489"
                                    // changeRating={this.changeRating}
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension= '28px'
                                    starSpacing = '1px'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="expD_reviewRight">
                            {this.state.data.reviews.map(rev =>{
                                return(
                                    <div className="expD_reviewRightContent">
                                        <div className="expD_reviewRightInfo">
                                            <div className="expD_reviewRightImage">
                                                <img src={rev.reviewer_thumbnail_url} alt=""/>
                                            </div>
                                            <div className="expD_reviewRightNameStar">
                                                <div className="expD_reviewRightNameDate">
                                                    <div className="expD_reviewRightName">
                                                        {rev.reviewer_name} · &nbsp;
                                                    </div>
                                                    <div className="expD_reviewRightDate">
                                                        {rev.date.split("T")[0]}
                                                    </div>
                                                </div>
                                                <div className="expD_reviewRightStar">
                                                <StarRatings
                                                    rating={rev.reviewer_score/2}
                                                    starRatedColor="#008489"
                                                    // changeRating={this.changeRating}
                                                    numberOfStars={5}
                                                    name='rating'
                                                    starDimension= '20px'
                                                    starSpacing = '1px'
                                                />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="expD_reviewRightContent_Content">
                                            {rev.comments}
                                        </div>
                                        <hr/>
                                    </div>
                                )
                            })}
                    </div>
               </div>
            </div>
        )
    }
}