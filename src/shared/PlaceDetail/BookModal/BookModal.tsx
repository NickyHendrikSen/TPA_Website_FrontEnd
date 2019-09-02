import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';
import './BookModal.scss'

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
    },
    totalguest:number,
    currentPage: number,
    reviewPerPage: number,
}

export class BookModal extends Component<IProps> {

    state = {
        data: this.props.data,
        totalguest:this.props.totalguest,
        currentPage: this.props.currentPage,
        reviewPerPage: this.props.reviewPerPage,
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

    render() {
        const{data} = this.state

        const currGuests = (this.state.totalguest <= 1)? this.state.totalguest+' Guest': this.state.totalguest+' Guests'

        return (
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
        )
    }
}

export default BookModal
