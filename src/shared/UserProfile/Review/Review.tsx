import React from "react"
import axios from "axios"
import "./Review.scss"
import StarRatings from 'react-star-ratings';
import { removeListener } from "cluster";

export default class Review extends React.Component{
    state = {
        starAverage:0,
        isLoading:true,
        data:[{
            reviews:[{
                _id:'',

            }]
        }]
    }
    componentWillMount(){
        axios.get('http://backendtpaweb.herokuapp.com/api/experience')
            .then(res => {
                var revList = [{}];
                let star = 0;
                let count = 0;
                for(let i = 0; i < res.data.length; i++){
                    if(res.data[i].host.host_id == localStorage.getItem('UserID')){
                        revList.push(res.data[i]);
                        for(let j = 0; j < res.data[i].reviews.length; j++){
                            star+= res.data[i].reviews[j].reviewer_score;
                            count++;
                        }
                    }
                }
                // console.log((star/count) + "");
                this.setState(
                    {
                        starAverage: star/count/2,
                        data : revList,
                        isLoading: false,
                    }
                )
                // console.log(res.data);
            }
        )
        
    }
    render(){
        // console.log(this.state.data);
        if(this.state.isLoading){
            return(<div>loading...</div>)
        }
        return(
            <div className="ReviewWrapper">
                <div className="Review_AverageRating">
                    <span>Average Rating Star : {this.state.starAverage.toFixed(2)}
                    </span>
                <StarRatings
                    rating={this.state.starAverage}
                    starRatedColor="#008489"
                    // changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                    starDimension= '28px'
                    starSpacing = '1px'
                />
                </div>
                <div className="Review_Search">
                    <span>Search : </span>
                    <input type="text" name="" id=""/>
                    <button className="Review_BtnSearch">Search</button>
                </div>
            </div>
        )
    }
}