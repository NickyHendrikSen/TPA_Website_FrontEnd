import React from "react"
import "./Places.scss"
import Map from "../Map/Map"
import Header from "../Header/Header"
import PlacesNavbar from "./PlacesNavbar/PlacesNavbar";
import "./PlacesGridSystem/PlacesGridSystems.scss";
import Footer from "../Footer/Footer";

export default class Places extends React.Component{
    render(){
        return(
            <div className="places_Wrapper">
                <Header />
                <PlacesNavbar />
                <div className="contents_wrapper">
                    <div className="list-wrapper">
                        <div className="list-container">
                            <div className="frame-title">
                                <div className="title">
                                    Category
                                </div>    
                            </div>
                            <div className="frame-wrapper-category">
                                <div className="col-slider-2 frame-container-category"></div>
                                <div className="col-slider-2 frame-container-category"></div>
                                <div className="col-slider-2 frame-container-category"></div>
                                <div className="col-slider-2 frame-container-category"></div>
                                <div className="col-slider-2 frame-container-category"></div>
                            </div>
                        </div>
                        <div className="list-container">
                            <div className="frame-title">
                                <div className="title">
                                    Places to stay
                                </div>    
                            </div>
                            <div className="frame-wrapper-room">
                                <div className="col-slider-2 frame-container"></div>
                                <div className="col-slider-2 frame-container"></div>
                                <div className="col-slider-2 frame-container"></div>
                                <div className="col-slider-2 frame-container"></div>
                                <div className="col-slider-2 frame-container"></div>
                                <div className="col-slider-2 frame-container"></div>
                                <div className="col-slider-2 frame-container"></div>
                                <div className="col-slider-2 frame-container"></div>
                                <div className="col-slider-2 frame-container"></div>
                                <div className="col-slider-2 frame-container"></div>
                                <div className="col-md-12 page"><h1>1 2 3 4</h1></div>
                            </div>
                        </div>
                    </div>
                    <div className="places_MapWidget">
                        <Map />
                    </div>
                </div>
            </div>
        )
    }
}