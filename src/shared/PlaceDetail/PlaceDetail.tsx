import React from "react"
import Header from "../Header/Header"
import "./PlaceDetail.scss"
import imagePlaceDetail from "./img/oldtown.jpg"
import axios from 'axios'
import {RouteComponentProps, withRouter} from "react-router";
import 'react-fa-icon'
import '../Places/PlacesGridSystem/PlacesGridSystems.scss';
import { url } from "inspector";
import { hostname } from "os";

export default class PlaceDetail extends React.Component <RouteComponentProps<any>>{
    state = {
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
        },
        image : imagePlaceDetail,
        isLoading:true
    }
    componentWillMount(){
        let id: any = this.props.match.params.id
        // const { fromNotifications } = this.props.location.state
        axios.get('http://backendtpaweb.herokuapp.com/api/rooms/' + id)
            .then(res => {
                this.setState(
                    {
                        data: res.data,
                        isLoading: false
                    }
                )
            }
        )
    }
    render(){
        const{data} = this.state
        
        const bigPhoto = () => {
            return(
                <div className="col-md-12 big-photo">
                    
                </div>
            )
        }

        const smallPhoto = () => {
            return(
                <div className="col-md-4 small-photo">
                    
                </div>
            )
        }

        return(
            <div className="place-detail-wrapper">
                <div className="top-nav">
                    <Header />
                </div>
                <div className="col-md-12 contents-wrapper">
                    <div className="col-md-12 top-list-photos">
                        <div className="col-md-4 big-photos">
                            <div className="col-md-12 big-photo" style={{backgroundImage: `url(${data.images.picture_url})`}}></div>
                            <div className="col-md-12 big-photo" style={{backgroundImage: `url(${data.images.picture_url})`}}></div>
                        </div>
                        <div className="col-md-4 small-photos">
                            <div className="col-md-4 small-photo" style={{backgroundImage: `url(${data.images.picture_url})`}}></div>
                            <div className="col-md-4 small-photo" style={{backgroundImage: `url(${data.images.picture_url})`}}></div>
                            <div className="col-md-4 small-photo" style={{backgroundImage: `url(${data.images.picture_url})`}}></div>
                            <div className="col-md-4 small-photo" style={{backgroundImage: `url(${data.images.picture_url})`}}></div>
                        </div>
                    </div>
                    <div className="col-md-12 host-info-wrapper">
                
                    </div>
                </div>
            </div>
        )
    }
}