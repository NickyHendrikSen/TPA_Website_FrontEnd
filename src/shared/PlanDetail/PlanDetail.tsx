import React, { Component } from 'react'
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet'
import "./PlanDetail.scss"
import axios from "axios"
import {RouteComponentProps, withRouter} from "react-router";
import { UniversalCard } from './UniversalCard/UniversalCard';

export class PlanDetail extends React.Component<RouteComponentProps<any>>{

    state={
        url:['https://cdns.klimg.com/kapanlagi.com/p/jennie_elle.jpg',
         'https://cdns.klimg.com/resized/670x335/p/headline/mobil-mewah-biaya-sekolah-ratusan-juta--eb1213.jpg',
         'https://cdns.klimg.com/kapanlagi.com/p/jennie_horse.jpg'],
        desc:'Ini Dummy',
        name:'Mantul',
        price:395,
        rating:5,
        number_of_reviews:212, 
        experience:[{
            Images:[]
        }],
        room:[{
            images:{
                picture_url:'',
            }
        }]
    }
    componentWillMount(){
        let id: any = this.props.match.params.id
        var expList = [{}];
        var roomList = [{}];
        axios.get('http://backendtpaweb.herokuapp.com/api/plans/' + localStorage.getItem('UserID'))
        .then(res => {    
            if(res.data == null) return;
            for(let i = 0; i < res.data.length; i++){
                // console.log(res.data[i]);
                //if both data empty
                if(res.data[i].PlansID != id) continue;
                if(res.data[i].RoomID == "[]" && res.data[i].ExperienceID == "[]"){
                    // (document.getElementsByClassName('savedPlan_images')[i] as HTMLImageElement).style.display = "none";
                }
                else if(res.data[i].RoomID != "[]"){
                    var roomid = ((res.data[i].RoomID.split('[')[1]).split(']')[0]).split(',')[0];
                    // temp.push(res.data[i]);
                    axios.get('http://backendtpaweb.herokuapp.com/api/rooms/' + roomid)
                    .then(ress => {    
                        roomList.push(ress.data);
                        // temps.push(ress.data.Images.picture_url);
                    }
                    )
                }
                else{
                    var expid = ((res.data[i].ExperienceID.split('[')[1]).split(']')[0]).split(',')[0];
                    // temp.push(res.data[i]);
                    axios.get('http://backendtpaweb.herokuapp.com/api/experience/' + expid)
                    .then(ress => {    
                        expList.push(ress.data);
                        // (document.getElementsByClassName('savedPlan_images')[i] as HTMLImageElement).src = ress.data.Images[0];
                        // temps.push(ress.data.Images[0]);
                    }
                    )
                }
            }   
        }
    )
        this.setState({
            experience: expList,
            room: roomList,
        })
    }
    experienceList(){
        var tab = document.getElementsByClassName("tab") as HTMLCollectionOf<HTMLElement>
        var text = document.getElementsByClassName("contents-count") as HTMLCollectionOf<HTMLElement>
        
        tab[0].style.backgroundColor = 'teal';
        tab[0].style.color = 'white';
        tab[1].style.backgroundColor = 'white';
        tab[1].style.color = 'rgba(0, 0, 0, 0.75)';
        text[0].innerHTML = 2 + " available experiences";
    }

    placeList(){
        var tab = document.getElementsByClassName("tab") as HTMLCollectionOf<HTMLElement>
        var text = document.getElementsByClassName("contents-count") as HTMLCollectionOf<HTMLElement>

        tab[1].style.backgroundColor = 'teal';
        tab[1].style.color = 'white';
        tab[0].style.backgroundColor = 'white';
        tab[0].style.color = 'rgba(0, 0, 0, 0.75)';
        text[0].innerHTML = 2 + " available places";
    }

    render() {
        const allImages = 
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
                            <UniversalCard {...this.state}/>
                        </div>
                    </div>
                </div>
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
