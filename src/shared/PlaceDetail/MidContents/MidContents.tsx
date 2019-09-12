import React, { Component } from 'react'
import "./MidContents.scss"

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
export class MidContents extends Component<IProps>{
    state = {
        data: this.props.data
    }
    contactHost = () => {
        localStorage.setItem('place_id', this.state.data._id);
        window.location.href = "/ChatDetail"
    }
    
    showAllAmenities(){
        let amenities = document.getElementsByClassName("all-amenities-wrapper") as HTMLCollectionOf<HTMLElement>

        amenities[0].style.zIndex = '1';
        amenities[0].style.position = '1';
        amenities[0].style.display = 'flex';
        
    }
    render() {
        const{data} = this.state
        return (
            <div className="mid-contents">
                <div className="desc-container">
                    <div className="desc">
                        {data.description}
                    </div>
                    <h3>Host</h3>
                    <div className="house-about">
                        <div className="left-identity-wrapper">
                            <div className="host-about-text">Host Location</div>
                            <div className="host-about-text">Host Response Time</div>
                            <div className="host-about-text">Host Response Rate</div>
                            <div className="host-about-text">Host Language</div>
                        </div>
                        <div className="right-identity-wrapper">
                            <div className="host-about-text">{data.host.host_location}</div>
                            <div className="host-about-text">{data.host.host_response_time}</div>
                            <div className="host-about-text">{data.host.host_response_rate}</div>
                            <div className="host-about-text">{data.address.country}</div>
                        </div>
                    </div>
                    <div className="contact-btn">
                        <button type="button" className="contact"  onClick={this.contactHost}>Contact Host</button>
                    </div>
                </div>
                <div className="amenities-wrapper">
                    <h3>Amenities</h3>
                    <div className="amenities-container">
                        <div className="amenities-value">{data.amenities[0]}</div>
                        <div className="amenities-value">{data.amenities[1]}</div>
                        <div className="amenities-value">{data.amenities[2]}</div>
                        <div className="amenities-value">{data.amenities[3]}</div>
                    </div>
                    <div className="show-all-btn">
                        <button type="button" className="show-all" onClick={this.showAllAmenities}>Show All {data.amenities.length}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MidContents
