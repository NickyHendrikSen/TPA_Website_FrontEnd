import React, { Component } from 'react'
import '../../GridSystem/GridSystems.scss'
import './SmallCards.scss'
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import Axios from "axios"

export class SmallCards extends Component{
    
    state = {
        data:[{
            _id:'',
            experience_category:'',
            experience_title:'',
            experience_detail:'',
            about_host:'',
            estimated_total_hours:'',
            price:0,
            rating_star:0,
            total_rating_star:0,
            amenities:[],
            should_bring:[],
            host:{
                host_id:'',
                host_name:'',
                host_location:'',
                host_response_time:'',
                host_about:'',
                host_thumbnail_url:'',
                host_response_rate:0,
                host_join_date:'',
                total_host_review:0,
                host_language:'',
            },
            address:{
                Street:'',
                suburb:'',
                country:'',
                location:{
                    type:'',
                    coordinates:[]
                }
            },
            Images:[],
            reviews:[]
        }],
        isLoading: true,
        error:'',
        callback:
            {
                country_code:'',
                country_name:'',
                city:'',
                postal:'',
                latitude:'',
                longitude:'',
                IPv4:'',
                state:''
            }
    }

    componentWillMount(){
        Axios.get('https://geoip-db.com/json')
        .then(res => {
            this.setState(
                {
                    callback: res.data
                }
            )
            Axios.get('http://backendtpaweb.herokuapp.com/api/experience-country/'+this.state.callback.country_name)
            .then((res:any) => {
                this.setState({
                    data:res.data,
                    isLoading:false
                })
            })
        })
    }


    render() {

        const {data, callback} = this.state

        const filteredData = data.slice(0, 6);
        
        const showFilteredData = filteredData.map((data, index) => {
            return(
                <Link to={"/ExperiencesDetail/"+data._id} className="col-md-1 card-wrapper" key={index}>
                    <div className="small-card-wrapper">
                        <div className="small-card">
                            <div className="small-card-slide" style={{backgroundImage:`url(${data.Images[0]})`}}></div>
                            <div className="small-card-desc">
                                <div className="small-card-place-category">{data.experience_category} • {data.address.country}</div>
                                <div className="small-card-place-name">{data.experience_title}</div>
                                <div className="small-card-place-price">${data.price}/night</div>
                                <div className="small-card-place-rating">
                                    <StarRatings
                                    rating={data.rating_star}
                                    starRatedColor="#008489"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension= '1em'
                                    starSpacing = '0.1vw'
                                    /> 
                                    <div className="small-card-place-reputations">({data.reviews.length})</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        });

        if(this.state.isLoading){
            return (
                <h2>Loading...</h2>
            )
        }

        return (
            <div className="col-md-12 recommendation-slider">
                <div className="col-md-12 recommendation-grid">
                    <h1 className="recommendation-title"><b>Top-rated Experience</b></h1>
                    {showFilteredData}
                    <div className="show-all-btn">
                        <Link to={"/Experiences"} className="link-to-place">
                            See All Experiences > 
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SmallCards
