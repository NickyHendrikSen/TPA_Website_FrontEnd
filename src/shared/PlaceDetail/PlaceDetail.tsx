import React from "react"
import Header from "../Header/Header"
import "./PlaceDetail.scss"
import Axios from "axios"
import {RouteComponentProps, withRouter} from "react-router";
import 'react-fa-icon'
import '../Places/PlacesGridSystem/PlacesGridSystems.scss';
import "../Places/pagination/pagination.scss";
import ListPhotos from "./ListPhotos/ListPhotos";
import TopContents from "./TopContents/TopContents";
import MidContents from "./MidContents/MidContents";
import BotContents from "./BotContents/BotContents";
import BookModal from "./BookModal/BookModal";

export default class PlaceDetail extends React.Component <RouteComponentProps<any>>{
    state = {
        data:{
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
            guest_included:'',
            bedrooms:'',
            bathrooms:'',
            beds:'',
            amenities:[],
            host:{
                host_name:'',
                host_thumbnail_url:'',
                host_location:'',
                host_response_time:'',
                host_response_rate:'',
            },
            review_scores:{ 
                review_scores_accuracy:'', 
                review_scores_cleanliness:'',
                review_scores_checkin:'', 
                review_scores_communication:'',
                review_scores_location:'',
                review_scores_value:'',
                review_scores_rating:''},
            address:{suburb:'', country:'', location:{coordinates:[]}},
            images:{picture_url:''},
            reviews:[{_id:'', reviewer_name:'', date:'', comments:''}],
            image_list:[]
        },
        totalguest:1,
        isLoading:true,
        currentPage: 1,
        reviewPerPage: 5,
    }

    componentWillMount(){
        let id: any = this.props.match.params.id
        // const { fromNotifications } = this.props.location.state
        Axios.get('http://backendtpaweb.herokuapp.com/api/rooms/' + id)
            .then(res => {
                this.setState(
                        {
                            data: res.data,
                            isLoading: false
                        }
                    )
                }
           )
    }
    
    closeAmenitiesModal(){
        let amenities = document.getElementsByClassName("all-amenities-wrapper") as HTMLCollectionOf<HTMLElement>

        amenities[0].style.zIndex = '-1';
        amenities[0].style.display = 'none';
    }

    render(){
        
        const{data} = this.state

        if (this.state.isLoading) {
            return (
                <h2>Loading...</h2>
            )
        }

        const allAmenities = data.amenities.map((amenity, index) => {
            return(
                <div key={index} className="amenities">
                    {amenity}
                </div>
            )
        });

        return(
            <div className="place-detail-wrapper">
                <div className="all-amenities-wrapper">
                    <div className="all-amenities-container">
                        <div className="close-btn-wrapper">
                            <button type="button" className="close-btn" onClick={this.closeAmenitiesModal}>X</button>
                        </div>
                        <h1>Amenities</h1>
                        {allAmenities}
                    </div>
                </div>
                <div className="top-nav">
                    <Header />
                </div>
                <div className="col-md-12 contents-wrapper">
                    <ListPhotos image_list={data.image_list} url={data.images.picture_url}/>
                    <div className="col-md-12 host-info-wrapper">
                        <div className="contents-wrapper">
                            <div className="left-contents-wrapper">
                                <TopContents data={data}/>
                                <MidContents data={data}/>
                                <BotContents 
                                    data={data} 
                                    totalguest={this.state.totalguest} 
                                    currentPage={this.state.currentPage} 
                                    reviewPerPage={this.state.reviewPerPage}/>
                            </div>
                            <div className="right-contents-wrapper">
                                <BookModal 
                                    data={data} 
                                    totalguest={this.state.totalguest} 
                                    currentPage={this.state.currentPage} 
                                    reviewPerPage={this.state.reviewPerPage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}