import React from "react"
import {Link} from "react-router-dom"
import "./Places.scss"
import Map from "../Map/Map"
import "./PlacesGridSystem/PlacesGridSystems.scss";
import axios from 'axios'
import { getDetailPlace } from "../../actions/placesAction"
import { connect } from "react-redux";

interface IProps{
    getDetailPlace: any,
    details: any
}

class Places extends React.Component<IProps>{

    state = {
        data:[{
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
            bathrooms:'',
            bedrooms:'',
            beds:'',
            guest_included:'',
            amenities:[],
            review_scores:{review_scores_rating:''},
            address:{suburb:''},
            images:{picture_url:''},
        }]
    }

    componentWillMount(){
        // const { fromNotifications } = this.props.location.state
        axios.get('http://backendtpaweb.herokuapp.com/api/rooms/place/Brazil')
            .then(res => {
                this.setState(
                    {
                        data: res.data
                    }
                )
                console.log(res.data)
            }
        )
    }

    toggleLove = (idx : any) => {
        var fari = document.getElementsByClassName("far") as HTMLCollectionOf<HTMLElement>;
        var fasi = document.getElementsByClassName("fas") as HTMLCollectionOf<HTMLElement>;
    
        fari[idx].style.display = 'none';
        fasi[idx].style.display = 'block';
    }
    
    toggleDislove = (idx : any) => {
        var fari = document.getElementsByClassName("far") as HTMLCollectionOf<HTMLElement>;
        var fasi = document.getElementsByClassName("fas") as HTMLCollectionOf<HTMLElement>;
        
        fari[idx].style.display = 'block';
        fasi[idx].style.display = 'none';
    }

    render(){
        return(
            <div className="places_Wrapper">
                <div className="col-md-6 contents_wrapper">
                    <div className="list-wrapper">
                        <div className="list-container">
                            <div className="frame-title">
                                <div className="title">
                                    300+ Places to stay
                                </div>    
                            </div>
                            <div className="frame-wrapper-room">
                                {this.state.data.map(room => {
                                    return(
                                        <Link to={"/PlaceDetail/" + room._id}>
                                            <div className="row-md-3 col-md-12 frame-container">
                                                <div className="frame-photo photo1" style={{backgroundImage: `url(${room.images.picture_url})`}}>
                                                </div>
                                                <div className="frame-desc">
                                                    <div className="desc-wrapper">
                                                        <div className="top-wrapper">
                                                            <div className="room-type">{room.room_type} • {room.address.suburb}</div>
                                                            <i className="far fa-heart" /*onClick={(idx : any) => {this.toggleLove(room)}}*/></i>
                                                            {/* <i className="fas fa-heart" onClick={(idx : any) => {this.toggleDislove(room)}}></i>*/}
                                                        </div>
                                                        <div className="room-name">{room.name}</div>
                                                        <div className="room-informations">
                                                            {room.guest_included} guests • {room.bedrooms} bedroom • {room.beds} bed • {room.bathrooms} bath
                                                        </div>
                                                        <div className="room-amenities">
                                                            {room.amenities[0]} • {room.amenities[1]} • {room.amenities[2]} 
                                                        </div>
                                                        <div className="room-rate-count">
                                                            <div className="rate-price-wrapper">
                                                                <div className="room-star">
                                                                    <div className="room-rate">
                                                                        ✪✪✪✪✪ {room.review_scores.review_scores_rating}
                                                                    </div>
                                                                </div>
                                                                <div className="room-price">${room.price} / night</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="places_MapWidget">
                        <Map />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => ({
    details: state.placeState.details
});

export default connect(mapStateToProps, { getDetailPlace })(Places)
