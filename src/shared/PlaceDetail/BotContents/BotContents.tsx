import "./BotContents.scss"
import StarRatings from 'react-star-ratings';
import React, { Component } from 'react'
import DetailPageMap from "./DetailPageMap/DetailPageMap";
import "google-translate";

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
        address:{suburb:string, country:string, location:{coordinates:number[]}},
        images:{picture_url:string},
        reviews:{_id:string, reviewer_name:string, date:string, comments:string}[],
    }
    totalguest:number,
    currentPage: number,
    reviewPerPage: number,
}

export class BotContents extends Component<IProps> {

    state = {
        data: this.props.data,
        totalguest:this.props.totalguest,
        currentPage:this.props.currentPage,
        reviewPerPage:this.props.reviewPerPage,
    }

    reset(){
        var page = document.getElementsByClassName("pageNumber") as HTMLCollectionOf<HTMLElement>;
        
        for(let i = 0; i < Math.ceil(this.state.data.reviews.length/this.state.reviewPerPage); i++){
            page[i].style.backgroundColor = "white";
            page[i].style.color = "teal";
        }

    }
    
    monthName(month:number){
        let mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        return mlist[month];
    }

    handleClick(e:number){
        this.setState({
            currentPage: e
        })
        var page = document.getElementsByClassName("pageNumber") as HTMLCollectionOf<HTMLElement>;
        let idx = e-1;
        if(page[idx]){
            this.reset();
            page[idx].style.backgroundColor = "teal";
            page[idx].style.color = "white";
        }
    }

    doTranslate(text:IProps){
        // console.log("asd")
        // translate(text.data.reviews[0].comments, {to:'en'})
        //     .then((res:any) => {console.log(res)})
        // console.log(text.data.reviews[0].comments)
        // var googleTranslate = require('google-translate')(apikey);
        // for(let i = 0; i < text.data.reviews.length; i++){
            
        //     googleTranslate.translate(this.state.data.reviews[i].comments, 'es', (err:any, translation:any) => {
        //         console.log(translation);
        //     })
        // }
    }
    
    render() {
        this.handleClick.bind(this.state);
        const{data, currentPage, reviewPerPage} = this.state

        const indexOfLastData = currentPage * reviewPerPage;
        const indexOfFirstData = indexOfLastData - reviewPerPage;
        const currentData = data.reviews.slice(indexOfFirstData, indexOfLastData);

        const pageNumber = [];
        for(let i = 1; i <= Math.ceil(data.reviews.length/reviewPerPage); i++){
            pageNumber.push(i);
        }

        const allReviews = currentData.map((reviewer, index) => {
            var date = new Date(`${reviewer.date}`) 
            return (
                <div className="review-container" key={index}>
                    <div className="reviewer-heading-wrapper">
                        <div className="reviewer-photo" style={{backgroundImage: `url(${data.host.host_thumbnail_url})`}}>
                        </div>
                        <div className="reviewer-identity">
                            <div className="reviewer-name">{reviewer.reviewer_name}</div>
                            <div className="reviewer-date">{this.monthName(date.getMonth())} {date.getFullYear()}</div>
                        </div>
                    </div>
                    <div className="reviewer-comments">{reviewer.comments}</div>
                </div>
            )
        }); 

        const renderPageNumbers = pageNumber.map((number:any) => {
            return (
                <div className="pageNumber" key={number} id={number} onClick={() => this.handleClick(number)}>
                    {number}
                </div>
            )
        });

        return (
            <div className="bot-contents">
                <div className="review-wrapper">
                    <div className="review-heading-wrapper">
                        <div className="review-heading">
                            {data.reviews.length} Reviews
                            <div className="overall-rating">    
                                <StarRatings
                                    rating={Number(data.review_scores.review_scores_rating)}
                                    starRatedColor="#008489"
                                    numberOfStars={5}
                                    name='rating'
                                    starDimension= '2vw'
                                    starSpacing = '0.1vw'
                                    />
                            </div>
                        </div>
                        <div className="review-ratings">
                            <div className="left-ratings-category">
                                <div className="review-cat accuracy">
                                    <div className="text-ratings-cat">Accuracy</div>
                                    <StarRatings rating={Number(data.review_scores.review_scores_accuracy)} starRatedColor="#008489" numberOfStars={5} name='rating' starDimension= '1.5vw' starSpacing = '0.1vw' />
                                </div>
                                <div className="review-cat communication">
                                    <div className="text-ratings-cat">Communication</div>
                                    <StarRatings rating={Number(data.review_scores.review_scores_communication)} starRatedColor="#008489" numberOfStars={5} name='rating' starDimension= '1.5vw' starSpacing = '0.1vw' />
                                </div>
                                <div className="review-cat cleanliness">
                                    <div className="text-ratings-cat">Cleanliness</div>
                                    <StarRatings rating={Number(data.review_scores.review_scores_cleanliness)} starRatedColor="#008489" numberOfStars={5} name='rating' starDimension= '1.5vw' starSpacing = '0.1vw' />
                                </div>
                            </div>
                            <div className="right-ratings-category">
                                <div className="review-cat location">
                                    <div className="text-ratings-cat">Location</div>
                                    <StarRatings rating={Number(data.review_scores.review_scores_location)} starRatedColor="#008489" numberOfStars={5} name='rating' starDimension= '1.5vw' starSpacing = '0.1vw' />
                                </div>
                                <div className="review-cat checkin">
                                    <div className="text-ratings-cat">Check-in</div>
                                    <StarRatings rating={Number(data.review_scores.review_scores_checkin)} starRatedColor="#008489" numberOfStars={5} name='rating' starDimension= '1.5vw' starSpacing = '0.1vw' />
                                </div>
                                <div className="review-cat score">
                                    <div className="text-ratings-cat">Score</div>
                                    <StarRatings rating={Number(data.review_scores.review_scores_value)} starRatedColor="#008489" numberOfStars={5} name='rating' starDimension= '1.5vw' starSpacing = '0.1vw' />
                                </div>
                            </div>
                        </div>
                        <div className="translate-btn">
                            <button type="button" className="translate" onClick={() => this.doTranslate(this.state)}>Translate to</button>
                        </div>
                    </div>
                    <div className="reviews-wrapper">
                        <div className="reviews">
                            {allReviews}
                            <div className="paginate-wrapper">
                                <div className="paginate-container">
                                    {renderPageNumbers}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map-widget-wrapper">
                        <DetailPageMap
                            lat = {data.address.location.coordinates[1]}
                            lng = {data.address.location.coordinates[0]}
                            name = {data.name}
                            price = {Number(data.price)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default BotContents
