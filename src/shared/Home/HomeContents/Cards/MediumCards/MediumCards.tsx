import React, { Component } from 'react'
import "./MediumCards.scss"
import '../../GridSystem/GridSystems.scss'
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import Axios from "axios"

export class MediumCards extends Component{
    
    state = {
        data:[{
            _id:'',
            name:'',
            summary:'',
            space:'',
            description:'',
            neighborhood_overview:'',
            access:'',
            house_rules:'',
            property_type:'',
            room_type:'',
            bed_type:'',
            price:'',
            bathrooms:'',
            bedrooms:'',
            beds:'',
            guest_included:'',
            amenities:[],
            host:{host_is_superhost:''},
            review_scores:{review_scores_rating:''},
            address:{suburb:'', country:'', location:{coordinates:[]}},
            images:{picture_url:''},
            reviews:[],
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
        Axios.all([
            Axios.get('https://backendtpaweb.herokuapp.com/api/toptenrooms'),
            Axios.get('https://geoip-db.com/json')
        ])
        .then(Axios.spread((roomRes:any, ipRes:any) => {
            this.setState(
                    {
                        data:roomRes.data,
                        callback:ipRes.data,
                        isLoading:false
                    }
                )
        }))
    }


    render() {

        const {data, callback} = this.state

        const filteredData = data.slice(0, 8);
        
        const showFilteredData = filteredData.map((data, index) => {
            let hostStatus = ""
            if(data.host.host_is_superhost) hostStatus = " • Superhost"
            return(
                <Link to={"/PlaceDetail/"+data._id} className="col-slider-2 card-wrapper" key={index}>
                    <div className="medium-card-wrapper">
                        <div className="medium-card">
                            <div className="medium-card-slide" style={{backgroundImage:`url(${data.images.picture_url})`}}></div>
                            <div className="medium-card-desc">
                                <div className="medium-card-place-category">{data.room_type} • {data.address.country}</div>
                                <div className="medium-card-place-name">{data.name}</div>
                                <div className="medium-card-place-price">${data.price}/night</div>
                                <div className="medium-card-place-rating">
                                    <StarRatings
                                    rating={data.review_scores.review_scores_rating}
                                    starRatedColor="#008489"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension= '1em'
                                    starSpacing = '0.1vw'
                                    /> 
                                    <div className="medium-card-place-reputations">({data.reviews.length}) {hostStatus}</div>
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
                    <h1 className="recommendation-title"><b>Recommendation for you</b></h1>
                    {showFilteredData}
                    <div className="show-all-btn">
                        <Link to={"/Places/"+callback.country_name} className="link-to-place">
                            See All (2000+) > 
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediumCards
