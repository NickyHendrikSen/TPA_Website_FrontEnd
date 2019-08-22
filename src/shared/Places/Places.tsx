import React from "react"
import "./Places.scss"
import Map from "../Map/Map"
import Header from "../Header/Header"
import PlacesNavbar from "./PlacesNavbar/PlacesNavbar";
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

        }
    }

    componentWillMount(){
        // const { fromNotifications } = this.props.location.state
        axios.get('http://backendtpaweb.herokuapp.com/api/experience/')
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

    render(){
        // const placeDetail = this.props.details.map((detail:any) => (
        //     detail.address
        // ));
        // const placeObject = Object.keys(placeDetail).map((key:any) => 
        //     <div>
        //         {placeDetail[key]}
        //     </div>
        // );
        return(
            <div className="places_Wrapper">
                {/* <Header /> */}
                {/* <PlacesNavbar /> */}
                {/* {console.log(placeDetail)} */}
                <div className="contents_wrapper">
                    <div className="list-wrapper">
                        <div className="list-container">
                            <div className="frame-title">
                                <div className="title">
                                    Places to stay
                                </div>    
                            </div>
                            <div className="frame-wrapper-room">
                                <div className="col-slider-2 frame-container">
                                    <div className="row-md-6 frame-photo photo1"></div>
                                    <div className="row-md-4 frame-desc">
                                        <div className="room-type">room_type</div>
                                        <div className="room-name">room_name</div>
                                        <div className="room-price">room_price</div>
                                        <div className="room-rate-count">
                                            <span className="room-rate"></span>
                                            <span className="count-rate">count</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-slider-2 frame-container">
                                    <div className="row-md-6 frame-photo photo2"></div>
                                    <div className="row-md-4 frame-desc">
                                        <div className="room-type">room_type</div>
                                        <div className="room-name">room_name</div>
                                        <div className="room-price">room_price</div>
                                        <div className="room-rate-count">
                                            <span className="room-rate"></span>
                                            <span className="count-rate">count</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-slider-2 frame-container">
                                    <div className="row-md-6 frame-photo photo3"></div>
                                    <div className="row-md-4 frame-desc">
                                        <div className="room-type">room_type</div>
                                        <div className="room-name">room_name</div>
                                        <div className="room-price">room_price</div>
                                        <div className="room-rate-count">
                                            <span className="room-rate"></span>
                                            <span className="count-rate">count</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-slider-2 frame-container">
                                    <div className="row-md-6 frame-photo photo4"></div>
                                    <div className="row-md-4 frame-desc">
                                        <div className="room-type">room_type</div>
                                        <div className="room-name">room_name</div>
                                        <div className="room-price">room_price</div>
                                        <div className="room-rate-count">
                                            <span className="room-rate"></span>
                                            <span className="count-rate">count</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-slider-2 frame-container">
                                    <div className="row-md-6 frame-photo photo5"></div>
                                    <div className="row-md-4 frame-desc">
                                        <div className="room-type">room_type</div>
                                        <div className="room-name">room_name</div>
                                        <div className="room-price">room_price</div>
                                        <div className="room-rate-count">
                                            <span className="room-rate"></span>
                                            <span className="count-rate">count</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-slider-2 frame-container">
                                    <div className="row-md-6 frame-photo photo1"></div>
                                    <div className="row-md-4 frame-desc">
                                        <div className="room-type">room_type</div>
                                        <div className="room-name">room_name</div>
                                        <div className="room-price">room_price</div>
                                        <div className="room-rate-count">
                                            <span className="room-rate"></span>
                                            <span className="count-rate">count</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-slider-2 frame-container">
                                    <div className="row-md-6 frame-photo photo2"></div>
                                    <div className="row-md-4 frame-desc">
                                        <div className="room-type">room_type</div>
                                        <div className="room-name">room_name</div>
                                        <div className="room-price">room_price</div>
                                        <div className="room-rate-count">
                                            <span className="room-rate"></span>
                                            <span className="count-rate">count</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-slider-2 frame-container">
                                    <div className="row-md-6 frame-photo photo3"></div>
                                    <div className="row-md-4 frame-desc">
                                        <div className="room-type">room_type</div>
                                        <div className="room-name">room_name</div>
                                        <div className="room-price">room_price</div>
                                        <div className="room-rate-count">
                                            <span className="room-rate"></span>
                                            <span className="count-rate">count</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-slider-2 frame-container">
                                    <div className="row-md-6 frame-photo photo4"></div>
                                    <div className="row-md-4 frame-desc">
                                        <div className="room-type">room_type</div>
                                        <div className="room-name">room_name</div>
                                        <div className="room-price">room_price</div>
                                        <div className="room-rate-count">
                                            <span className="room-rate"></span>
                                            <span className="count-rate">count</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-slider-2 frame-container">
                                    <div className="row-md-6 frame-photo photo5"></div>
                                    <div className="row-md-4 frame-desc">
                                        <div className="room-type">room_type</div>
                                        <div className="room-name">room_name</div>
                                        <div className="room-price">room_price</div>
                                        <div className="room-rate-count">
                                            <span className="room-rate"></span>
                                            <span className="count-rate">count</span>
                                        </div>
                                    </div>
                                </div>
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
