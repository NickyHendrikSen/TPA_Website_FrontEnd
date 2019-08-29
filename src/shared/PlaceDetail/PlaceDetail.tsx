import React from "react"
import Header from "../Header/Header"
import "./PlaceDetail.scss"
import imagePlaceDetail from "./img/oldtown.jpg"
import axios from 'axios'
import {RouteComponentProps, withRouter} from "react-router";
import 'react-fa-icon'
import '../Places/PlacesGridSystem/PlacesGridSystems.scss';
import StarRatings from 'react-star-ratings';
import "../Places/pagination/pagination.scss";

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
            address:{suburb:'', country:''},
            images:{picture_url:''},
            reviews:[{_id:'', reviewer_name:'', date:'', comments:''}],
        },
        image : imagePlaceDetail,
        totalguest:1,
        isLoading:true,
        currentPage: 1,
        reviewPerPage: 5,
    }

    componentWillMount(){
        let id: any = this.props.match.params.id
        // const { fromNotifications } = this.props.location.state
        axios.get('http://backendtpaweb.herokuapp.com/api/rooms/' + id)
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
        
    changeTypetoDate(e:any){
        e.currentTarget.style.backgroundColor = "#82EEE6";
        e.currentTarget.type="date";
    }

    changeTypeCItoText(e:any){
        e.currentTarget.type="text";
        e.currentTarget.placeholder="Check-in";
        e.currentTarget.style.backgroundColor = "white";
    }
    
    changeTypeCOtoText(e:any){
        e.currentTarget.type="text";
        e.currentTarget.placeholder="Check-out";
        e.currentTarget.style.backgroundColor = "white";
    }

    checkIcon(x:number, y:number, z:number){
        let minus = document.getElementsByClassName("minus") as HTMLCollectionOf<HTMLElement>
        let plus = document.getElementsByClassName("plus") as HTMLCollectionOf<HTMLElement>
        
        let adult = document.getElementsByClassName("adult-guest") as HTMLCollectionOf<HTMLElement>
        let child = document.getElementsByClassName("child-guest") as HTMLCollectionOf<HTMLElement>
        let infant = document.getElementsByClassName("infant-guest") as HTMLCollectionOf<HTMLElement>

        if(Number(adult[0].innerHTML) > 0){
            plus[0].style.color = "rgba(0, 127, 128, 1)"
            plus[0].style.pointerEvents = "fill";
            minus[0].style.color = "rgba(0, 129, 128, 1)";
            minus[0].style.pointerEvents = "fill";
        }
        if(Number(child[0].innerHTML) > 0){
            plus[1].style.color = "rgba(0, 127, 128, 1)"
            plus[1].style.pointerEvents = "fill";
            minus[1].style.color = "rgba(0, 129, 128, 1)";
            minus[1].style.pointerEvents = "fill";
        }
        if(Number(infant[0].innerHTML) > 0){
            plus[2].style.color = "rgba(0, 127, 128, 1)"
            plus[2].style.pointerEvents = "fill";
            minus[2].style.color = "rgba(0, 129, 128, 1)";
            minus[2].style.pointerEvents = "fill";
        }
        
        if(Number(adult[0].innerHTML) <= 0){
            plus[0].style.color = "rgba(0, 127, 128, 1)"
            plus[0].style.pointerEvents = "fill";
            minus[0].style.color = "rgba(0, 129, 128, 0.5)";
            minus[0].style.pointerEvents = "none";
        }
        if(Number(child[0].innerHTML) <= 0){
            plus[1].style.color = "rgba(0, 127, 128, 1)"
            plus[1].style.pointerEvents = "fill";
            minus[1].style.color = "rgba(0, 129, 128, 0.5)";
            minus[1].style.pointerEvents = "none";
        }
        if(Number(infant[0].innerHTML) <= 0){
            plus[2].style.color = "rgba(0, 127, 128, 1)"
            plus[2].style.pointerEvents = "fill";
            minus[2].style.color = "rgba(0, 129, 128, 0.5)";
            minus[2].style.pointerEvents = "none";
        }

        if(x + y + z >= Number(this.state.data.guest_included)){
            for(let i = 0; i < 3; i++){
                plus[i].style.color = "rgba(0, 127, 128, 0.5)"
                plus[i].style.pointerEvents = "none";
                if(i === 0 && Number(adult[0].innerHTML) <= 0){
                    minus[i].style.color = "rgba(0, 129, 128, 0.5)";
                    minus[i].style.pointerEvents = "none";
                }
                else if(i === 1 && Number(child[0].innerHTML) <= 0){
                    minus[i].style.color = "rgba(0, 129, 128, 0.5)";
                    minus[i].style.pointerEvents = "none";
                }
                else if(i === 2 && Number(infant[0].innerHTML) <= 0){
                    minus[i].style.color = "rgba(0, 129, 128, 0.5)";
                    minus[i].style.pointerEvents = "none";
                }
            }
        }

        this.setState({
            totalguest: x+y+z
        });

    }
    
    minus(index:number){
        let adult = document.getElementsByClassName("adult-guest") as HTMLCollectionOf<HTMLElement>
        let child = document.getElementsByClassName("child-guest") as HTMLCollectionOf<HTMLElement>
        let infant = document.getElementsByClassName("infant-guest") as HTMLCollectionOf<HTMLElement>
        
        let adultCount = Number(adult[0].innerHTML);
        let childCount = Number(child[0].innerHTML);
        let infantCount = Number(infant[0].innerHTML);
        
        if(index === 0){
            adultCount--;
            adult[0].innerHTML = ""+adultCount;
        }
        else if(index === 1){
            childCount--;
            child[0].innerHTML = ""+childCount;
        }
        else if(index === 2){
            infantCount--;
            infant[0].innerHTML = ""+infantCount;
        }
        this.checkIcon(adultCount, childCount, infantCount);
    }

    plus(index:number){
        let adult = document.getElementsByClassName("adult-guest") as HTMLCollectionOf<HTMLElement>
        let child = document.getElementsByClassName("child-guest") as HTMLCollectionOf<HTMLElement>
        let infant = document.getElementsByClassName("infant-guest") as HTMLCollectionOf<HTMLElement>

        let adultCount = Number(adult[0].innerHTML);
        let childCount = Number(child[0].innerHTML);
        let infantCount = Number(infant[0].innerHTML);
        
        if(index === 0){
            adultCount++;
            adult[0].innerHTML = ""+adultCount;
        }
        else if(index === 1){
            childCount++;
            child[0].innerHTML = ""+childCount;
        }
        else if(index === 2){
            infantCount++;
            infant[0].innerHTML = ""+infantCount;
        }
        this.checkIcon(adultCount, childCount, infantCount);
    }

    activateOption(){
        let guestType = document.getElementsByClassName('guest-type') as HTMLCollectionOf<HTMLElement>

        guestType[0].style.display = "block";
    }
    closeGuestType(){
        let guestType = document.getElementsByClassName('guest-type') as HTMLCollectionOf<HTMLElement>

        guestType[0].style.display = "none";
    }

    monthName(month:number){
        let mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        return mlist[month];
    }

    reset(){
        var page = document.getElementsByClassName("pageNumber") as HTMLCollectionOf<HTMLElement>;

        for(let i = 0; i < Math.ceil(this.state.data.reviews.length/this.state.reviewPerPage); i++){
            page[i].style.backgroundColor = "white";
            page[i].style.color = "teal";
        }

    }

    showAllAmenities(){
        let amenities = document.getElementsByClassName("all-amenities-wrapper") as HTMLCollectionOf<HTMLElement>

        amenities[0].style.zIndex = '1';
    }
    closeAmenitiesModal(){
        let amenities = document.getElementsByClassName("all-amenities-wrapper") as HTMLCollectionOf<HTMLElement>

        amenities[0].style.zIndex = '-1';
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

    render(){
        this.handleClick.bind(this.state);
        const{data, currentPage, reviewPerPage} = this.state
        const currGuests = (this.state.totalguest <= 1)? this.state.totalguest+' Guest': this.state.totalguest+' Guests'

        const indexOfLastData = currentPage * reviewPerPage;
        const indexOfFirstData = indexOfLastData - reviewPerPage;
        const currentData = data.reviews.slice(indexOfFirstData, indexOfLastData);

        const pageNumber = [];
        for(let i = 1; i <= Math.ceil(data.reviews.length/reviewPerPage); i++){
            pageNumber.push(i);
        }

        const renderPageNumbers = pageNumber.map((number:any) => {
            return (
                <div className="pageNumber" key={number} id={number} onClick={() => this.handleClick(number)}>
                    {number}
                </div>
            )
        });

        if (this.state.isLoading) {
            return (
                <h2>Loading...</h2>
            )
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
                    <div className="col-md-12 top-list-photos">
                        <div className="col-md-4 big-photos">
                            <div className="col-md-12 big-photo" style={{backgroundImage: `url(${data.images.picture_url})`}}></div>
                            <div className="col-md-12 big-photo" style={{backgroundImage: `url(${data.images.picture_url})`}}></div>
                        </div>
                        <div className="col-md-4 small-photos">
                            <div className="small-photo" style={{backgroundImage: `url(${data.images.picture_url})`}}></div>
                            <div className="small-photo" style={{backgroundImage: `url(${data.images.picture_url})`}}></div>
                            <div className="small-photo" style={{backgroundImage: `url(${data.images.picture_url})`}}></div>
                            <div className="small-photo" style={{backgroundImage: `url(${data.images.picture_url})`}}></div>
                        </div>
                    </div>
                    <div className="col-md-12 host-info-wrapper">
                        <div className="contents-wrapper">
                            <div className="left-contents-wrapper">
                                <div className="top-contents">
                                    <div className="place-header-wrapper">
                                        <div className="place-name">{data.name} <div className="place-suburb">{data.address.suburb}</div> </div>
                                        <div className="place-host">
                                            <div className="place-host-photo" style={{backgroundImage: `url(${data.host.host_thumbnail_url})`}}></div>
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
                                            <button type="button" className="contact">Contact Host</button>
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
                                                <button type="button" className="translate">Translate to</button>
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
                                    </div>
                                </div>
                            </div>
                            <div className="right-contents-wrapper">
                                <div className="book-modal">
                                    <div className="top-modal-wrapper">
                                        <div className="info-wrapper">
                                            <div className="price-wrapper">
                                                <div className="price">
                                                    ${Number(data.price)}
                                                </div>
                                                <div className="price-info">
                                                    per malam
                                                </div>
                                            </div>
                                            <div className="rating">
                                                <StarRatings
                                                rating={Number(data.review_scores.review_scores_rating)}
                                                starRatedColor="#008489"
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension= '1vw'
                                                starSpacing = '0.1vw'
                                                />
                                                {data.reviews.length}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-wrapper">
                                        <form className="form-container" action="" method="post">
                                            <div className="date-wrapper">
                                                <div className="date-container">
                                                    <div className="text-date">Tanggal</div>
                                                    <div className="in-n-out-wrapper">
                                                        <input className="check-in date" placeholder="Check-in" type="text" onFocus={this.changeTypetoDate} onBlur={this.changeTypeCItoText}/>
                                                        <div className="fas fa-arrow-right arrow"></div>
                                                        <input className="check-out date" placeholder="Check-out" type="text" onFocus={this.changeTypetoDate} onBlur={this.changeTypeCOtoText}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="guest-wrapper">
                                                <div className="text-guest">Tamu</div>
                                                <input className="input-guest" type="text" onFocus={this.activateOption} value={currGuests} readOnly/>
                                                <div className="guest-type">
                                                    {()=>this.checkIcon(1, 0, 0)}
                                                    <div className="adult-wrapper">
                                                        Adult
                                                        <div className="controller-wrapper">
                                                            <div className="fas fa-minus-circle minus fa-2x" onClick={()=>this.minus(0)}></div>
                                                            <div className="adult-guest">1</div>
                                                            <div className="fas fa-plus-circle plus fa-2x" onClick={()=>this.plus(0)}></div>
                                                        </div>
                                                    </div>
                                                    <div className="child-wrapper">
                                                        Child
                                                        <div className="controller-wrapper">
                                                            <div className="fas fa-minus-circle minus fa-2x" onClick={()=>this.minus(1)}></div>
                                                            <div className="child-guest">0</div>
                                                            <div className="fas fa-plus-circle plus fa-2x" onClick={()=>this.plus(1)}></div>
                                                        </div>
                                                    </div>
                                                    <div className="infant-wrapper">
                                                        Infant
                                                        <div className="controller-wrapper">
                                                            <div className="fas fa-minus-circle minus fa-2x" onClick={()=>this.minus(2)}></div>
                                                            <div className="infant-guest">0</div>
                                                            <div className="fas fa-plus-circle plus fa-2x" onClick={()=>this.plus(2)}></div>
                                                        </div>
                                                    </div>
                                                    <div className="notes-wrapper">
                                                        {data.guest_included} guests maximum, Infant doesn't count as a guest.
                                                    </div>
                                                    <div className="close-btn">
                                                        <div className="close-text" onClick={this.closeGuestType}>Close</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="book-wrapper">
                                                <input className="btn-book" type="button" value="Book"/>
                                                <div className="info-text">Anda belum dikenakan biaya</div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}