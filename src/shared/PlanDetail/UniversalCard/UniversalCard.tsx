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
    type:string,
    beds:number,
    index:number,
}

export class UniversalCard extends Component<IProps> {
    
    state = {
        url:this.props.url,
        desc:this.props.desc,
        name:this.props.name,
        price:this.props.price,
        rating:this.props.rating,
        number_of_reviews:this.props.number_of_reviews,    
        type:this.props.type,
        beds:this.props.beds,
        index:this.props.index,
    }

    toggleRemove(){
        
    }

    render() {
        const data = this.state;
        
        return (
            <div className="col-md-12 list-wrapper">
                <div className="toggle-container">
                    <button onClick={this.toggleRemove}>Remove</button>
                </div>
                <Imagecarousel index={this.state.index+1} image_list={data.url}/>
                <div className="col-md-12 desc-frame">
                    <div className="desc">{data.desc}</div>
                    <div className="name">{data.name}</div>
                    <div>{data.type != "Experience" ? data.beds + " beds" : ""}</div>
                    <div className="price">${data.price} per {data.type == "Experience" ? "Person" : "Night"}</div>
                    <div className="rating">
                        {data.rating.toFixed(2)}
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
