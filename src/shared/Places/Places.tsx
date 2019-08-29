import React from "react"
import {Link} from "react-router-dom"
import "./Places.scss"
import "./PlacesGridSystem/PlacesGridSystems.scss";
import axios from 'axios'
import StarRatings from 'react-star-ratings';
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet'
import BeHost_Room from "../BeHost_Room/BeHost_Room";
import { resetWarningCache } from "prop-types";

class Places extends React.Component{

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
            address:{suburb:'', location:{coordinates:[]}},
            images:{picture_url:''},
            reviews:[],
        }],
        isLoading: true,
        currentPage: 1,
        placesPerPage: 5,
    }

    position = {
        address:[
            {
                name: 'Icon',
                price: 'Mahal',
                coordinates: [-6.201922, 106.783014],
            },
            {
                name: 'Kost Haji Indra',
                price: 'Terjangkau',
                coordinates: [-6.200070, 106.783317],
            }
        ],
        minLat: [-6.201151, 106.782900]
    }

    componentWillMount(){
        // const { fromNotifications } = this.props.location.state
        axios.get('http://backendtpaweb.herokuapp.com/api/rooms/place/Brazil')
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

    clickState = {
        lastClick:-1
    }

    reset(){
        var page = document.getElementsByClassName("pageNumber") as HTMLCollectionOf<HTMLElement>;

        for(let i = 0; i < Math.ceil(this.state.data.length/this.state.placesPerPage); i++){
            page[i].style.backgroundColor = "white";
            page[i].style.color = "teal";
        }

    }

    handleClick(e:number){
        this.setState({
            currentPage: e
        })
        var page = document.getElementsByClassName("pageNumber") as HTMLCollectionOf<HTMLElement>;
        let idx = e-1;
        if(page[idx]){
            this.reset();
            page[idx].style.backgroundColor = "teal";
            page[idx].style.color = "white";
        }
    }

    toggleLove = (idx : number) => {
        var fari = document.getElementsByClassName("fa-heart") as HTMLCollectionOf<HTMLElement>;

        if(fari[idx].className === "fas fa-heart"){
            fari[idx].className = "far fa-heart";
            //do save to love list
        }
        else{
            fari[idx].className = "fas fa-heart";
            //remove love from lova list
        }
    }

    render(){
        this.handleClick.bind(this.state);
        const {data, currentPage, placesPerPage} = this.state;

        const indexOfLastData = currentPage * placesPerPage;
        const indexOfFirstData = indexOfLastData - placesPerPage;
        const currentData = data.slice(indexOfFirstData, indexOfLastData);

        const renderData = currentData.map((room, index) => {
            return (
                <Link to={"/PlaceDetail/" + room._id}>
                    <div className="row-md-3 col-md-12 frame-container" key={index}>
                        <div className="frame-photo photo1" style={{backgroundImage: `url(${room.images.picture_url})`}}>
                        </div>
                        <div className="frame-desc">
                            <div className="desc-wrapper">
                                <div className="top-wrapper">
                                    <div className="room-type">{room.room_type} • {room.address.suburb}</div>
                                    <i className="far fa-heart" onClick={() => {this.toggleLove(index)}}></i>
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
                                                <StarRatings
                                                    rating={Number(room.review_scores.review_scores_rating)}
                                                    starRatedColor="#008489"
                                                    numberOfStars={5}
                                                    name='rating'
                                                    starDimension= '1vw'
                                                    starSpacing = '0.1vw'
                                                    />
                                            </div>
                                            <div className="count-rate">
                                                    • ({room.reviews.length})
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
        });

        const pageNumber = [];
        for(let i = 1; i <= Math.ceil(data.length/placesPerPage); i++){
            pageNumber.push(i);
        }

        const renderPageNumbers = pageNumber.map((number:any) => {
            return (
                <div className="pageNumber" key={number} id={number} onClick={() => this.handleClick(number)}>
                    {number}
                </div>
            )
        });

        if (this.state.isLoading) {
            return ( <div>Loading...</div> )
        }
        
        return(
            <div className="col-md-12 places_Wrapper">
                <div className="col-md-6 contents_wrapper">
                    <div className="list-wrapper">
                        <div className="list-container">
                            <div className="frame-title">
                                <div className="title">
                                    300+ Places to stay
                                </div>    
                            </div>
                            <div className="frame-wrapper-room">
                                {renderData}
                            </div>
                        </div>
                    </div>
                    <div className="bottom-wrapper"> 
                        <div className="paginate-wrapper">
                            <div className="paginate-container">
                                {renderPageNumbers}
                            </div>
                            <div className="total-data">
                                1 - {data.length} dari 300+ Sewa Tempat
                            </div>
                            <div className="bottom-credit">
                                Masukkan tanggal untuk melihat harga lengkap. Biaya tambahan berlaku. Mungkin dikenakan pajak. Pembatalan gratis hanya berlaku dalam waktu 48 setelah pemesanan.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="places_MapWidget">
                    <LeafletMap
                            center={[-6.201151, 106.782900]}
                            zoom={15}
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
                            {this.position.address.map(point => 
                                <Marker position={[point.coordinates[0], point.coordinates[1]]}>
                                    <Popup>
                                        • Place : {point.name}
                                        <br/>
                                        • Price : {point.price}
                                    </Popup>
                                </Marker>
                            )}
                    </LeafletMap>
                    )
                </div>
            </div>
        )
    }
}

export default Places
