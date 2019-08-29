import React from "react"
import Header from "../Header/Header"
import "./PlaceDetail.scss"
import imagePlaceDetail from "./img/oldtown.jpg"
import axios from 'axios'
import {RouteComponentProps, withRouter} from "react-router";
import 'react-fa-icon'
import '../Places/PlacesGridSystem/PlacesGridSystems.scss';
import StarRatings from 'react-star-ratings';
import { url } from "inspector";
import { hostname, type } from "os";
import { resetWarningCache } from "prop-types";

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
            host:{host_name:'', host_thumbnail_url:''},
            review_scores:{review_scores_rating:''},
            address:{suburb:''},
            images:{picture_url:''},
            reviews:[{_id:'', reviewer_name:'', date:'', comments:''}],
        },
        image : imagePlaceDetail,
        totalguest:1,
        isLoading:true
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

    render(){
        const{data} = this.state
        const currGuests = (this.state.totalguest <= 1)? this.state.totalguest+' Guest': this.state.totalguest+' Guests'

        if (this.state.isLoading) {
            return (
                <h2>Loading...</h2>
            )
        }
    
        const allReviews = data.reviews.map((reviewer, index) => {
            return (
                <div key={index}>
                    <h3><strong>{reviewer.reviewer_name}</strong></h3>
                    <h4>{reviewer.date}</h4>
                    <h5>{reviewer.comments}</h5>
                    <hr/>
                </div>
            )
        }); 

        return(
            <div className="place-detail-wrapper">
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
                                            {data.host.host_name}
                                        </div>
                                    </div>
                                    <div className="place-detail"></div>
                                </div>
                                <div className="mid-contents"></div>
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
                                            <div className="review-ratings"></div>
                                        </div>
                                        <div className="reviews">
                                            {allReviews}
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
                                                    ${Number(data.price)*Number(this.state.totalguest)}
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