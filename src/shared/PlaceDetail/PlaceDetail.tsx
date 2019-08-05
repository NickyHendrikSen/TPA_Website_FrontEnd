import React from "react"
import Header from "../Header/Header"
import "./PlaceDetail.scss"
import imagePlaceDetail from "./img/oldtown.jpg"
import 'react-fa-icon'
import { url } from "inspector";

export default class PlaceDetail extends React.Component{
    state={
        image : imagePlaceDetail
    }
    render(){
        return(
            <div className="placeDetail">
                <div>
                    <Header />
                </div>
                <div className="placeD_imageWrapper">
                    <div className="placeD_leftImage" style={{backgroundImage : `url(${this.state.image})`}}>
                        {/* <img src={imagePlaceDetail} alt=""/> */}
                    </div>
                    <div className="placeD_midImage">
                        <div className="placeD_topImage" style={{backgroundImage : `url(${this.state.image})`}}>
                            {/* <img src={imagePlaceDetail} alt=""/> */}
                        </div>
                        <div className="placeD_botImage" style={{backgroundImage : `url(${this.state.image})`}}>
                            {/* <img src={imagePlaceDetail} alt=""/> */}
                        </div>
                    </div>
                    <div className="placeD_rightImage">
                        <div className="placeD_topImage" style={{backgroundImage : `url(${this.state.image})`}}>
                            {/* <img src={imagePlaceDetail} alt=""/> */}
                        </div>
                        <div className="placeD_botImage" style={{backgroundImage : `url(${this.state.image})`}}>
                            {/* <img src={imagePlaceDetail} alt=""/> */}
                        </div>
                    </div>
                    <div className="placeD_saveshare">
                        <div className="placeD_share">
                            <i className="fas fa-upload"></i> &nbsp;Share
                        </div>
                        <div className="placeD_save">
                            <i className="far fa-heart"></i> &nbsp;Save
                        </div>
                    </div>
                    <div className="placeD_view">
                        View Photos
                    </div>
                </div>
            </div>
        )
    }
}