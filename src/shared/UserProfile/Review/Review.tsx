import React from "react"
import axios from "axios"
import "./Review.scss"
import StarRatings from 'react-star-ratings';
import { removeListener } from "cluster";

export default class Review extends React.Component{
    state = {
        starAverage:0,
        isLoading:true,
        pageNow:0,
        reviews:[{
            _id:'',
            reviewer_thumbnail_url:'',
            reviewer_name:'',
            date:'',
            reviewer_score:0,
            comments:'',
        }],
        filters:[{
            _id:'',
            reviewer_thumbnail_url:'',
            reviewer_name:'',
            date:'',
            reviewer_score:0,
            comments:'',
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
                        for(let j = 0; j < res.data[i].reviews.length; j++){
                            revList.push(res.data[i].reviews[j]);
                        }
                        for(let j = 0; j < res.data[i].reviews.length; j++){
                            star+= res.data[i].reviews[j].reviewer_score;
                            count++;
                        }
                    }
                }
                revList.splice(0,1);
                // console.log(revList);
                // console.log((star/count) + "");
                this.setState(
                    {
                        starAverage: star/count/2,
                        reviews : revList,
                        filters : revList,
                        isLoading: false,
                    }
                )
                // console.log(res.data);
            }
        )
        
    } 
    reviewSearch = () => {
        var txt = document.getElementById('txtSearch') as HTMLInputElement;
        var temp = [{}];
        for(let i = 0; i < this.state.reviews.length; i++){
            if(this.state.reviews[i].comments.includes(txt.value + "")){
                temp.push(this.state.reviews[i]);
            }
        }
        temp.splice(0,1);
        this.setState({
            filters : temp,
        })
    }
    changePage(i : number){ 
        this.setState({
            pageNow:i
        })
    }
    render(){
        // console.log(this.state.reviews);
        const currData = this.state.filters.slice(this.state.pageNow*3, (this.state.pageNow*3) + 3);
        const showAllData = currData.map(rev =>{
            return(
                <div className="expD_reviewRightContent">
                    <div className="expD_reviewRightInfo">
                        <div className="expD_reviewRightImage">
                            <img src={rev.reviewer_thumbnail_url} alt=""/>
                        </div>
                        <div className="expD_reviewRightNameStar">
                            <div className="expD_reviewRightNameDate">
                                <div className="expD_reviewRightName">
                                    {rev.reviewer_name} · &nbsp;
                                </div>
                                <div className="expD_reviewRightDate">
                                    {(rev.date.split("T")[0]).split('-')[1] == "01" ? "January" : (rev.date.split("T")[0]).split('-')[1] == "02" ? "February" : (rev.date.split("T")[0]).split('-')[1] == "03" ? "March" : (rev.date.split("T")[0]).split('-')[1] == "04" ? "April" : (rev.date.split("T")[0]).split('-')[1] == "05" ? "May" : (rev.date.split("T")[0]).split('-')[1] == "06" ? "June" : (rev.date.split("T")[0]).split('-')[1] == "07" ? "July" : (rev.date.split("T")[0]).split('-')[1] == "08" ? "August" : (rev.date.split("T")[0]).split('-')[1] == "09" ? "September" : (rev.date.split("T")[0]).split('-')[1] == "10" ? "October" : (rev.date.split("T")[0]).split('-')[1] == "11" ? "November" : (rev.date.split("T")[0]).split('-')[1] == "12" ? "December" : "Loading"}
                                    &nbsp;{((rev.date.split("T")[0]).split('-')[0])}
                                </div> 
                            </div>
                            <div className="expD_reviewRightStar">
                            <StarRatings
                                rating={rev.reviewer_score/2}
                                starRatedColor="#008489"
                                // changeRating={this.changeRating}
                                numberOfStars={5}
                                name='rating'
                                starDimension= '20px'
                                starSpacing = '1px'
                            />
                            </div>
                        </div>
                    </div>
                    <div className="expD_reviewRightContent_Content">
                        {rev.comments}
                    </div>
                </div>
            )
        });
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
                    <input type="text" name="" id="txtSearch"/>
                    <button className="Review_BtnSearch" onClick={this.reviewSearch}>Search</button>
                </div>
                {showAllData}
                <div className="Review_Page">
                    {(() => {
                    const options = [];
                    
                    for (let i = 0; i < Math.ceil(this.state.filters.length/3); i++) {
                        options.push(<div className="page" onClick={() => this.changePage(i)}>{i+1}</div>);
                    }

                    return options;
                })()}
                </div>
            </div>
        )
    }
}