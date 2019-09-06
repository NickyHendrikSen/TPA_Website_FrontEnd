import React from "react"
import "./Experience.scss"
import ExperienceHeader from "./ExperienceHeader/ExperienceHeader"
import Map from "../Map/Map"
import oldtown from "./img/oldtown.jpg"
import stars from "./img/stars.png"
import heart from "./img/heart.png"
import {Link} from "react-router-dom"
import axios from 'axios'
import StarRatings from 'react-star-ratings';

export default class Experience extends React.Component{
    state = {
        data:[{
            _id:'',
            experience_category:'',
            address:{suburb:''},
            experience_title:'',
            price:0,
            estimated_total_hours:'',
            amenities:[],
            rating_star:0,
            total_rating_count:0,
            Images:[],
        }]
    }
    showSaveModal(){
        if(localStorage.getItem('UserID') == null || localStorage.getItem('UserID') == ""){
            var lightBox = document.getElementsByClassName("login_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;
            lightBox[0].style.display = "flex";
            // console.log(lightBox[0]);  
            var body = document.getElementsByTagName("Body")[0] as HTMLElement;
        }
        else{
            (document.getElementsByClassName('exps_saveModal')[0] as HTMLElement).style.display = "flex";
        }
    }
    componentWillMount(){
        axios.get('http://backendtpaweb.herokuapp.com/api/experience')
            .then(res => {
                this.setState(
                    {
                        data: res.data,
                    }
                )
            }
        )
    }
    // &#10084;
    render(){
        return(
            <div className="exps_Wrapper">
                {/* <Header/> */}
                <div className="exps_Content">
                {this.state.data.map(data => {
                   return (
                    <div className="exps_CardWrapper">
                        <div className="exps_Card">
                            <div className="exps_CardImage">
                                <Link to={"/ExperiencesDetail/" + data._id}><img src={data.Images[0]} alt=""/></Link>
                                {/* <img src={heart} alt="" className="exps_CardLove"/> */}
                                <span className="exps_white_heart" onClick={this.showSaveModal}>&#9825;</span>
                            </div>
                            <div className="exps_CardInformation">
                                <div className="exps_CardLocation">
                                    {data.experience_category} · {data.address.suburb}
                                </div>
                                <div className="exps_CardTitle">
                                    {data.experience_title}
                                </div>
                                <div className="exps_CardDescription">
                                    <li className="exps_CardPrice">${data.price} per person</li>
                                    <li className="exps_CardTime">{data.estimated_total_hours}</li>
                                    <li className="exps_CardBenefit">{data.amenities[0]}
                                    {data.amenities.slice(1,3).map(e=>{
                                        return(
                                            <span>, {e} </span>
                                        )
                                    })}
                                     included</li>
                                </div>
                                <div className="exps_CardRating">
                                    {(Math.round(data.rating_star/data.total_rating_count*100)/100).toFixed(2)}
                                    {/* <img src={stars} alt=""/> */}
                                    <StarRatings
                                    rating={data.total_rating_count == 0 ? 0 : data.rating_star/data.total_rating_count}
                                    starRatedColor="#008489"
                                    // changeRating={this.changeRating}
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension= '20px'
                                    starSpacing = '1px'
                                    />
                                    <span className="exps_CardRatingResponds">({data.total_rating_count})</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
                {/* Card Wrapper */}
                    {/* <div className="exps_CardWrapper">
                        <div className="exps_Card">
                            <div className="exps_CardImage">
                                <Link to="/ExperiencesDetail"><img src={oldtown} alt=""/></Link>
                                <img src={heart} alt="" className="exps_CardLove"/>
                            </div>
                            <div className="exps_CardInformation">
                                <div className="exps_CardLocation">
                                    photo shoot · Tamansari
                                </div>
                                <div className="exps_CardTitle">
                                    Capture Memories at Jakarta Old Town
                                </div>
                                <div className="exps_CardDescription">
                                    <li className="exps_CardPrice">$48 per person</li>
                                    <li className="exps_CardTime">2 hours</li>
                                    <li className="exps_CardBenefit">Transportation, Drinks, 1 ticket included</li>
                                </div>
                                <div className="exps_CardRating">
                                    5.0 
                                    <img src={stars} alt=""/>
                                    <span className="exps_CardRatingResponds">(20)</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* Until here */}
                    
                </div>
            </div>
        )
    }
}