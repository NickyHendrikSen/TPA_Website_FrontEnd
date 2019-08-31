import '../../Places/PlacesGridSystem/PlacesGridSystems.scss';
import './TopContents.scss'
import React, { Component } from 'react'

interface IProps{
    data:{
        _id:string,
        name:string,
        summary:string,
        space:string,
        description:string,
        neighborhood_overview:string,
        access:string,
        house_rules:string,
        property_type:string,
        room_type:string,
        bed_type:string,
        price:string,
        guest_included:string,
        bedrooms:string,
        bathrooms:string,
        beds:string,
        amenities:string[],
        host:{
            host_name:string,
            host_thumbnail_url:string,
            host_location:string,
            host_response_time:string,
            host_response_rate:string,
        },
        review_scores:{ 
            review_scores_accuracy:string, 
            review_scores_cleanliness:string,
            review_scores_checkin:string, 
            review_scores_communication:string,
            review_scores_location:string,
            review_scores_value:string,
            review_scores_rating:string},
        address:{suburb:string, country:string},
        images:{picture_url:string},
        reviews:{_id:string, reviewer_name:string, date:string, comments:string}[],
    }
}

export default class TopContents extends Component<IProps> {
    
    state = {
        data: this.props.data
    }
    
    render() {
        const {data} = this.state
        return (
            <div className="top-contents">
                <div className="place-header-wrapper">
                    <div className="place-name-wrapper">
                        <div className="place-name">{data.name}
                            <div className="place-suburb">{data.address.suburb}</div> 
                        </div>
                    </div>
                    <div className="place-host">
                        <div className="place-host-photo" style={{backgroundImage: `url(${data.host.host_thumbnail_url})`}}>
                        </div>
                        <div className="place-host-name">{data.host.host_name}</div>
                    </div>
                </div>
                <div className="place-detail">
                    <div className="room-type"><i className="fas fa-home"></i> {data.room_type}</div>
                    <div className="room-info">
                        <div>{data.guest_included} Guest</div>
                        <div>{data.bedrooms} Bedrooms</div>
                        <div>{data.beds} Beds</div>
                        <div>{data.bathrooms} Bathrooms</div>
                    </div>
                </div>
            </div>
        )
    }
}
