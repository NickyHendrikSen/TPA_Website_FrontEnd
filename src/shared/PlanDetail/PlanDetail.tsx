import React, { Component } from 'react'
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet'
import "./PlanDetail.scss"
import { UniversalCard } from './UniversalCard/UniversalCard';

export class PlanDetail extends Component {

    state={
        url:['https://cdns.klimg.com/kapanlagi.com/p/jennie_elle.jpg',
         'https://cdns.klimg.com/resized/670x335/p/headline/mobil-mewah-biaya-sekolah-ratusan-juta--eb1213.jpg',
         'https://cdns.klimg.com/kapanlagi.com/p/jennie_horse.jpg'],
        desc:'Ini Dummy',
        name:'Mantul',
        price:395,
        rating:5,
        number_of_reviews:212, 
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
        return (
            <div className="plan-detail-wrapper">
                <div className="plan-detail-container">
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
