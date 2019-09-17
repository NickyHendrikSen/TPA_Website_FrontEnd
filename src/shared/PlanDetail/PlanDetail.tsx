import React, { Component } from 'react'
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet'
import "./PlanDetail.scss"
import axios from "axios"
import {RouteComponentProps, withRouter} from "react-router";
import { UniversalCard } from './UniversalCard/UniversalCard';

export class PlanDetail extends React.Component<RouteComponentProps<any>>{

    state={
        data:[{
            url:['https://cdns.klimg.com/kapanlagi.com/p/jennie_elle.jpg',
            'https://cdns.klimg.com/resized/670x335/p/headline/mobil-mewah-biaya-sekolah-ratusan-juta--eb1213.jpg',
            'https://cdns.klimg.com/kapanlagi.com/p/jennie_horse.jpg'],
            desc:'Ini Dummy',
            name:'Mantul',
            price:395,
            rating:5,
            number_of_reviews:212, 
        }],
        experience:[{
            Images:[],
            experience_title:'',
            experience_category:'',
            price:0,
            reviews:[{
                reviewer_score:0,
            }]
        }],
        room:[{
            name:'',
            summary:'',
            price:0,
            reviews:[{

            }],
            review_scores:{
                review_scores_rating:0, //Dibagi 20 soalnya maxnya 100..
            },
            images:{
                picture_url:'',
            }
        }]
    }
    componentDidMount(){
        this.experienceList();
    }
    componentWillMount(){
        let id: any = this.props.match.params.id
        console.log(id);
        var expList = [{}];
        var roomList = [{}];
        axios.get('http://backendtpaweb.herokuapp.com/api/plans/' + localStorage.getItem('UserID'))
        .then(res => {    
            if(res.data == null) return;
            for(let i = 0; i < res.data.length; i++){
                //if both data empty
                if(res.data[i].PlansID == id){
                    console.log(res.data[i]);
                    if(res.data[i].PlansID != id) continue;
                    if(res.data[i].RoomID == "[]" && res.data[i].ExperienceID == "[]"){
                        // (document.getElementsByClassName('savedPlan_images')[i] as HTMLImageElement).style.display = "none";
                        break;
                    }
                    if(res.data[i].RoomID != "[]"){
                        var roomid = ((res.data[i].RoomID.split('[')[1]).split(']')[0]).split(',');
                        // temp.push(res.data[i]);
                        for(let k = 0; k < roomid; k++){
                            axios.get('http://backendtpaweb.herokuapp.com/api/rooms/' + roomid[k])
                            .then(ress => {    
                                roomList.push(ress.data);
                                // temps.push(ress.data.Images.picture_url);
                            }
                            )
                        }
                    }
                    if(res.data[i].ExperienceID != "[]"){
                        var expid = ((res.data[i].ExperienceID.split('[')[1]).split(']')[0]).split(',');
                        // temp.push(res.data[i]);
                        for(let k = 0; k < expid.length; k++){
                            axios.get('http://backendtpaweb.herokuapp.com/api/experience/' + expid[k])
                            .then(ress => {    
                                expList.push(ress.data);
                                // (document.getElementsByClassName('savedPlan_images')[i] as HTMLImageElement).src = ress.data.Images[0];
                                // temps.push(ress.data.Images[0]);
                            }
                            )
                        }
                    }
                }
            }   
        }
    )
        expList.splice(0,1);
        roomList.splice(0,1);
        this.setState({
            experience: expList,
            room: roomList,
        })
    }
    experienceList = () => {
        var tab = document.getElementsByClassName("tab") as HTMLCollectionOf<HTMLElement>
        var text = document.getElementsByClassName("contents-count") as HTMLCollectionOf<HTMLElement>
        
        tab[0].style.backgroundColor = 'teal';
        tab[0].style.color = 'white';
        tab[1].style.backgroundColor = 'white';
        tab[1].style.color = 'rgba(0, 0, 0, 0.75)';
        text[0].innerHTML = (this.state.experience.length) + " available experiences";

        var dataList = [{}];
        for(let i = 0; i < this.state.experience.length; i++){
            let total = 0;
            for(let j = 0; j < this.state.experience[i].reviews.length; j++){
                total += this.state.experience[i].reviews[j].reviewer_score;
            }
            var dataTemp = {
                url: this.state.experience[i].Images,
                desc:this.state.experience[i].experience_title,
                name:this.state.experience[i].experience_category,
                price:this.state.experience[i].price,
                rating:total/this.state.experience[i].reviews.length/2,
                number_of_reviews:this.state.experience[i].reviews.length, 
            };
            dataList.push(dataTemp);
        }
        dataList.splice(0,1);
        this.setState({
            data: dataList,
        })
    }

    placeList = () => {
        var tab = document.getElementsByClassName("tab") as HTMLCollectionOf<HTMLElement>
        var text = document.getElementsByClassName("contents-count") as HTMLCollectionOf<HTMLElement>

        tab[1].style.backgroundColor = 'teal';
        tab[1].style.color = 'white';
        tab[0].style.backgroundColor = 'white';
        tab[0].style.color = 'rgba(0, 0, 0, 0.75)';
        text[0].innerHTML = (this.state.room.length) + " available places";

        var dataList = [{}];
        for(let i = 0; i < this.state.room.length; i++){
            var dataTemp = {
                url: this.state.room[i].images.picture_url,
                desc:this.state.room[i].summary,
                name:this.state.room[i].name,
                price:this.state.room[i].price,
                rating:this.state.room[i].review_scores.review_scores_rating/20,
                number_of_reviews:this.state.room[i].reviews.length, 
            };
            dataList.push(dataTemp);
        }
        dataList.splice(0,1);
        this.setState({
            data: dataList,
        })
    }

    render() {
        console.log(this.state.room);
        console.log(this.state.experience);
        const allImages = (
                <div className="detail-container">
                    <div className="plan-name">Rencana Bulan Mandu</div>
                    <div className="plan-date-guest">May 17 - May 18 • 2 guests</div><h4></h4>
                    <div className="tabs-container">
                        <div className="tab" onClick={this.experienceList}>
                            Experiences
                        </div>
                        <div className="tab" onClick={this.placeList}>
                            Places
                        </div>
                    </div>
                    <div className="tab-contents">
                        <div className="contents-count">
                            available experiences
                        </div>
                        <div className="col-md-12 card">
                        {this.state.data.map(e=>{ 
                            return(
                            <UniversalCard url = {e.url}
                                desc = {e.desc}
                                name = {e.name}
                                price = {e.price}
                                rating = {e.rating}
                                number_of_reviews = {e.number_of_reviews}
                            />
                            )
                        })}
                        </div>
                    </div>
                </div>
        )
        return (
            <div className="plan-detail-wrapper">
                <div className="plan-detail-container">
                {allImages}
                </div>
                <LeafletMap className="plan-detail-map"
                        center={[50, 10]}
                        zoom={20}
                        attributionControl={true}
                        zoomControl={true}
                        doubleClickZoom={true}
                        scrollWheelZoom={true}
                        dragging={true}
                        animate={true}
                        easeLinearity={0.35}
                    >
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={[50, 10]}>
                        <Popup>
                        </Popup>
                    </Marker>
                </LeafletMap>
            </div>
        )
    }
}

export default PlanDetail
