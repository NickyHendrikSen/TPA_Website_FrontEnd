import React from "react"
import "./Experience.scss"
import ExperienceHeader from "./ExperienceHeader/ExperienceHeader"
import Map from "../Map/Map"
import oldtown from "./img/oldtown.jpg"
import stars from "./img/stars.png"
import heart from "./img/heart.png"
import {Link} from "react-router-dom"
import axios from 'axios'
import StarRatings from 'react-star-ratings';
import PlanList from "../PlanList/PlanList";

export default class Experience extends React.Component{
    state = {
        data:[{
            _id:'',
            experience_category:'',
            address:{suburb:''},
            experience_title:'',
            price:0,
            estimated_total_hours:'',
            amenities:[],
            rating_star:0,
            total_rating_count:0,
            Images:[],
        }],
        plans:[{
            ExperienceID:'',
            PlansID:''
        }],
        minimumPrice:0,
        maximumPrice:0,
        filter:[{
            _id:'',
            experience_category:'',
            address:{suburb:''},
            experience_title:'',
            price:0,
            estimated_total_hours:'',
            amenities:[],
            rating_star:0,
            total_rating_count:0,
            Images:[],
        }],
    }
    showSaveModal(id :string){
        if(localStorage.getItem('UserID') == null || localStorage.getItem('UserID') == ""){
            var lightBox = document.getElementsByClassName("login_lightBoxWrapper") as HTMLCollectionOf<HTMLElement>;
            lightBox[0].style.display = "flex";
            // console.log(lightBox[0]);  
            var body = document.getElementsByTagName("Body")[0] as HTMLElement;
        }
        else{
            localStorage.setItem('ExperienceChosen', id); 
            // console.log(this.state.plans.length);
            // console.log(id);
            (document.getElementsByClassName('exps_saveModal')[0] as HTMLElement).style.display = "flex";
            if(this.state.plans == null) return;
            for(let i = 0; i < this.state.plans.length; i++){
                (document.getElementById("love" + this.state.plans[i].PlansID) as HTMLElement).style.color = "white";
                let ids = (this.state.plans[i].ExperienceID.split('[')[1]).split(']')[0].split(',');
                // console.log(ids);
                for(let j = 0; j < ids.length; j++){
                    if(ids[j] == id){
                        (document.getElementById("love" + this.state.plans[i].PlansID) as HTMLElement).style.color = "red";
                        // break;z
                    }
                }
            }
        }
    }
    componentWillMount(){
        axios.get('http://backendtpaweb.herokuapp.com/api/experience')
            .then(res => {
                this.setState(
                    {
                        data: res.data,
                        filter: res.data
                    }
                )
            }
        )
        axios.get('http://backendtpaweb.herokuapp.com/api/plans/' + localStorage.getItem('UserID'))
            .then(res => {
                this.setState(
                    {
                        plans: res.data,
                    }
                )
            }
        )
        //Set heart
        
    }
    filter = () =>{
        var min = parseInt((document.getElementById('min') as HTMLInputElement).value)
        var max = parseInt((document.getElementById('max') as HTMLInputElement).value)
        if(min > max || isNaN(min) || isNaN(max)){
            alert('Invalid input');
            return;
        }
        if(max == 0){
            this.setState(
                {
                    filter : this.state.data
                }
            )
            return;
        }
        let a =[];
        for(let i = 0; i < this.state.data.length; i++){
            if(this.state.data[i].price >= min && this.state.data[i].price <= max){
                a.push(this.state.data[i])
            }
        }
        this.setState(
            {
                filter : a
            }
        )
    }

    // &#10084;
    render(){       
        return(
            <div className="exps_Wrapper">
                {/* <Header/> */}
                <div className="exps_filter">Price : &nbsp;
                    <input type="number" name="" id="min" min={0}/> to&nbsp;
                    <input type="number" name="" id="max" min={0}/>
                    <button onClick={this.filter}>Filter</button>
                </div>
                <div className="note">Set maximum to 0 to show all</div>
                <div className="exps_Content">
                {this.state.filter.map(data => {
                    return (
                        <div className="exps_CardWrapper">
                            <div className="exps_Card">
                                <div className="exps_CardImage">
                                    <Link to={"/ExperiencesDetail/" + data._id}><img src={data.Images[0]} alt=""/></Link>
                                    {/* <img src={heart} alt="" className="exps_CardLove"/> */}
                                    <span className="exps_white_heart" id={"whiteHeart" + data._id} onClick={() => this.showSaveModal(data._id)}>&#9825;</span>
                                </div>
                                <div className="exps_CardInformation">
                                    <div className="exps_CardLocation">
                                        {data.experience_category} · {data.address.suburb}
                                    </div>
                                    <div className="exps_CardTitle">
                                        {data.experience_title}
                                    </div>
                                    <div className="exps_CardDescription">
                                        <li className="exps_CardPrice">${data.price} per person</li>
                                        <li className="exps_CardTime">{data.estimated_total_hours}</li>
                                        <li className="exps_CardBenefit">{data.amenities[0]}
                                        {data.amenities.slice(1,1).map(e=>{
                                            return(
                                                <span>, {e} </span>
                                            )
                                        })}
                                        &nbsp;
                                        included</li>
                                    </div>
                                    <div className="exps_CardRating">
                                        {(Math.round(data.rating_star/data.total_rating_count*100)/100).toFixed(2)}
                                        {/* <img src={stars} alt=""/> */}
                                        <StarRatings
                                        rating={data.total_rating_count == 0 ? 0 : data.rating_star/data.total_rating_count}
                                        starRatedColor="#008489"
                                        // changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension= '20px'
                                        starSpacing = '1px'
                                        />
                                        <span className="exps_CardRatingResponds">({data.total_rating_count})</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) 
                })}
                {/* Card Wrapper */}
                    {/* <div className="exps_CardWrapper">
                        <div className="exps_Card">
                            <div className="exps_CardImage">
                                <Link to="/ExperiencesDetail"><img src={oldtown} alt=""/></Link>
                                <img src={heart} alt="" className="exps_CardLove"/>
                            </div>
                            <div className="exps_CardInformation">
                                <div className="exps_CardLocation">
                                    photo shoot · Tamansari
                                </div>
                                <div className="exps_CardTitle">
                                    Capture Memories at Jakarta Old Town
                                </div>
                                <div className="exps_CardDescription">
                                    <li className="exps_CardPrice">$48 per person</li>
                                    <li className="exps_CardTime">2 hours</li>
                                    <li className="exps_CardBenefit">Transportation, Drinks, 1 ticket included</li>
                                </div>
                                <div className="exps_CardRating">
                                    5.0 
                                    <img src={stars} alt=""/>
                                    <span className="exps_CardRatingResponds">(20)</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* Until here */}
                    
                </div>
            </div>
        )
    }
}