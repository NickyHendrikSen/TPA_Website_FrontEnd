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
        filterReviewList: this.props.data.reviews,
        reviewList: this.props.data.reviews,
        getData: this.props.data
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

    doSearch = () => {
        let search = document.getElementById('search') as HTMLInputElement
        let dataTemp = [{}];

        for(let i = 0; i < this.state.reviewList.length; i++){
            if(this.state.reviewList[i].comments.includes(search.value)){
                dataTemp.push(this.state.reviewList[i]);
            }
        }
        dataTemp.splice(0,1);
        this.setState({
            filterReviewList:dataTemp,
        })
    }

    doTranslate(text:IProps){

    }
    
    render() {
        this.handleClick.bind(this.state);
        const{getData, currentPage, reviewPerPage} = this.state

        const indexOfLastData = currentPage * reviewPerPage;
        const indexOfFirstData = indexOfLastData - reviewPerPage;
        const currentData = this.state.filterReviewList.slice(indexOfFirstData, indexOfLastData);

        const pageNumber = [];
        for(let i = 1; i <= Math.ceil(this.state.filterReviewList.length/reviewPerPage); i++){
            pageNumber.push(i);
        }

        const allReviews = currentData.map((reviewer, index) => {
            var date = new Date(`${reviewer.date}`) 
            return (
                <div className="review-container" key={index}>
                    <div className="reviewer-heading-wrapper">
                        <div className="reviewer-photo" style={{backgroundImage: `url(${getData.host.host_thumbnail_url})`}}>
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
                            <div className="rating-container">
                                {getData.reviews.length} Reviews
                                <div className="overall-rating">    
                                    <StarRatings
                                        rating={Number(getData.review_scores.review_scores_rating)}
                                        starRatedColor="#008489"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension= '1em'
                                        starSpacing = '0.1em'
                                        />
                                </div>
                            </div>
                            <div className="search-container">
                                <input type="text" name="search" id="search" placeholder="search" onChange={this.doSearch}/>
                            </div>
                        </div>
                        <div className="review-ratings">
                            <div className="left-ratings-category">
                                <div className="review-cat accuracy">
                                    <div className="text-ratings-cat">Accuracy</div>
                                    <StarRatings rating={Number(getData.review_scores.review_scores_accuracy)} starRatedColor="#008489" numberOfStars={5} name='rating' starDimension= '1em' starSpacing = '0.1em' />
                                </div>
                                <div className="review-cat communication">
                                    <div className="text-ratings-cat">Communication</div>
                                    <StarRatings rating={Number(getData.review_scores.review_scores_communication)} starRatedColor="#008489" numberOfStars={5} name='rating' starDimension= '1em' starSpacing = '0.1em' />
                                </div>
                                <div className="review-cat cleanliness">
                                    <div className="text-ratings-cat">Cleanliness</div>
                                    <StarRatings rating={Number(getData.review_scores.review_scores_cleanliness)} starRatedColor="#008489" numberOfStars={5} name='rating' starDimension= '1em' starSpacing = '0.1em' />
                                </div>
                            </div>
                            <div className="right-ratings-category">
                                <div className="review-cat location">
                                    <div className="text-ratings-cat">Location</div>
                                    <StarRatings rating={Number(getData.review_scores.review_scores_location)} starRatedColor="#008489" numberOfStars={5} name='rating' starDimension= '1em' starSpacing = '0.1em' />
                                </div>
                                <div className="review-cat checkin">
                                    <div className="text-ratings-cat">Check-in</div>
                                    <StarRatings rating={Number(getData.review_scores.review_scores_checkin)} starRatedColor="#008489" numberOfStars={5} name='rating' starDimension= '1em' starSpacing = '0.1em' />
                                </div>
                                <div className="review-cat score">
                                    <div className="text-ratings-cat">Score</div>
                                    <StarRatings rating={Number(getData.review_scores.review_scores_value)} starRatedColor="#008489" numberOfStars={5} name='rating' starDimension= '1em' starSpacing = '0.1em' />
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
                            lat = {getData.address.location.coordinates[1]}
                            lng = {getData.address.location.coordinates[0]}
                            name = {getData.name}
                            price = {Number(getData.price)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default BotContents
