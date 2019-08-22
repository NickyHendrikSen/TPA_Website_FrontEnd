import React from "react"
import Header from "../Header/Header"
import "./PlaceDetail.scss"
import imagePlaceDetail from "./img/oldtown.jpg"
import axios from 'axios'
import {RouteComponentProps, withRouter} from "react-router";
import 'react-fa-icon'
import { url } from "inspector";

export default class PlaceDetail extends React.Component <RouteComponentProps<any>>{
    state={
        image : imagePlaceDetail,
        data:{
            _id:'',
            name:'',
            summary:'',
            space:'',
            description:'',
            neighborhood_overview:'',
            access:'',
            house_rules:'',
            property_type:'',
            room_type:'',
            bed_type:'',
            price:'',
            address:{suburb:''},
            images:{picture_url:''},
        }
    }
    componentWillMount(){
        let id: any = this.props.match.params.id
        // const { fromNotifications } = this.props.location.state
        axios.get('http://backendtpaweb.herokuapp.com/api/rooms/' + id)
            .then(res => {
                this.setState(
                    {
                        data: res.data,
                    }
                )
                console.log(res.data)
            }
        )
        
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
                {/* Delete aja.. Ini cuma buat tes data masuk.. sebelum buat layoutnya */}
                <h1 style={{backgroundColor: 'red'}}>Delete aja.. Ini cuma buat tes data masuk.. sebelum buat layoutnya</h1>
                <h1 style={{backgroundColor: 'yellow'}}>Room ID : {this.state.data._id}</h1>
                <br/>
                <h1 style={{backgroundColor: 'green'}}>description : <br/>{this.state.data.description}</h1>
                {/*  */}
            </div>
        )
    }
}