import React from "react"
import "./Experience.scss"
import {Link} from "react-router-dom"
import axios from 'axios'
import StarRatings from 'react-star-ratings';

export default class Experience extends React.Component{
    state = {
        language:[{
            languageName:'',
            code:'',
        }],
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
            reviews:[],
            reviewAvg:0,
            host:{
                host_language:'',
            }
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
            reviews:[],
            reviewAvg:0,
            host:{
                host_language:'',
            }
        }],
        isLoading: true,
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
        
        axios.get('https://api.myjson.com/bins/ns7n7').then( e => {
            console.log(e);
            this.setState({
                language: e.data,
            })
        })
    
        axios.get('http://backendtpaweb.herokuapp.com/api/experience')
            .then(res => {
                var dataList = [{}];
                for(let i = 0; i < res.data.length; i++){
                    var dataTemp = {
                        _id:res.data[i]._id,
                        experience_category:res.data[i].experience_category,
                        address:{suburb:res.data[i].address.suburb},
                        experience_title: res.data[i].experience_title,
                        price: res.data[i].price,
                        estimated_total_hours: res.data[i].estimated_total_hours,
                        amenities: res.data[i].amenities,
                        rating_star: res.data[i].rating_star,
                        total_rating_count: res.data[i].total_rating_count,
                        Images: res.data[i].Images,
                        reviews:res.data[i].reviews,
                        reviewAvg:0,
                        host: res.data[i].host,
                    };
                    let total = 0;
                    for(let j = 0; j < res.data[i].reviews.length; j++){
                        total += res.data[i].reviews[j].reviewer_score;
                        // console.log(total);
                    }
                    dataTemp.reviewAvg = total;
                    dataList.push(dataTemp);
                }
                // console.log(dataList);
                dataList.splice(0,1);
                this.setState(
                    {
                        data: dataList,
                        filter: dataList,
                        isLoading: false,
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
    filterLang = () => {
        var min = (document.getElementById('Slanguage') as HTMLSelectElement).value
        if(min == "all"){
            this.setState({
                filter : this.state.data
            })
            return;
        }
        let a =[];
        for(let i = 0; i < this.state.data.length; i++){
            if(this.state.data[i].host.host_language.includes(min)){
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
        if(this.state.isLoading){
            return(<div>Loading...</div>)
        }
        console.log(this.state.filter);
        return(
            <div className="exps_Wrapper">
                {/* <Header/> */}
                <div className="exps_filter">Price : &nbsp;
                    <input type="number" name="" id="min" min={0}/> to&nbsp;
                    <input type="number" name="" id="max" min={0}/>
                    <button onClick={this.filter}>Filter</button>
                </div>
                <div className="exps_filter">Language : &nbsp;
                    <select name="" id="Slanguage">
                        {this.state.language.map(e => {
                            return(
                                <option value={e.languageName}>{e.languageName}</option>
                            )
                        })}
                    </select>
                    <button onClick={this.filterLang}>Filter</button>
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
                                        {(Math.round(data.reviewAvg/data.reviews.length/2*100)/100).toFixed(2)}
                                        {/* <img src={stars} alt=""/> */}
                                        <StarRatings
                                        rating={data.total_rating_count == 0 ? 0 : data.reviewAvg/data.reviews.length/2}
                                        starRatedColor="#008489"
                                        // changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension= '20px'
                                        starSpacing = '1px'
                                        />
                                        <span className="exps_CardRatingResponds">({data.reviews.length})</span>
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