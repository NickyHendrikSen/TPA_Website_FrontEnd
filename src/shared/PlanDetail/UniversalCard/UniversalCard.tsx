import React, { Component } from 'react'
import StarRatings from 'react-star-ratings'
import { Imagecarousel } from '../../Places/Imagecarousel/Imagecarousel';
import "../../Places/Imagecarousel/Imagecarousel.scss"
import "./UniversalCard.scss"

interface IProps{
    url:string[],
    desc:string,
    name:string,
    price:number,
    rating:number,
    number_of_reviews:number,
}

export class UniversalCard extends Component<IProps> {
    
    state = {
        url:this.props.url,
        desc:this.props.desc,
        name:this.props.name,
        price:this.props.price,
        rating:this.props.rating,
        number_of_reviews:this.props.number_of_reviews,    
    }

    toggleLove(){
        var love = document.getElementsByClassName("heart far fa-heart") as HTMLCollectionOf<HTMLElement>

        if(love[0].className === "heart fas fa-heart"){            
            love[0].className = "heart far fa-heart"
        }
        else{
            love[0].className = "heart fas fa-heart";
        }
    }

    render() {
        const data = this.state;
        return (
            <div className="col-md-12 list-wrapper">
                <div className="heart far fa-heart" onClick={this.toggleLove}>
                </div>
                <Imagecarousel index={1} image_list={data.url}>
                </Imagecarousel>
                <div className="col-md-12 desc-frame">
                    <div className="desc">{data.desc}</div>
                    <div className="name">{data.name}</div>
                    <div className="price">${data.price} per nigh</div>
                    <div className="rating">
                        <StarRatings
                            rating={data.rating}
                            starRatedColor="#008489"
                            numberOfStars={5}
                            name='rating'
                            starDimension= '1em'
                            starSpacing = '0.1em'
                            /> • {data.number_of_reviews}
                    </div>
                </div>
            </div>
        )
    }
}

export default UniversalCard
