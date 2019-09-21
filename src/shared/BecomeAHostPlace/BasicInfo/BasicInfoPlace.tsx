import React, { Component } from 'react'
import {Map as LeafletMap, TileLayer, Marker, Popup, CircleMarker, Circle} from 'react-leaflet'
import './basicInfoPlace.scss'
import Axios from 'axios'

interface IProps{
    setCurrClass: any
}

export class BasicInfoPlace extends Component<IProps> {

    state={
        street:'',
        city:'',
        country:'',
        postal_code:'',
        data:[{
            lat:''||50,
            lon:''||10,
            display_name:'',
            boundingbox:[]
        }]
    }

    test = () => {
        let mapCountry = document.getElementById('map-country') as HTMLInputElement
        let mapAddress = document.getElementById('map-address') as HTMLInputElement
        let mapCity = document.getElementById('map-city') as HTMLInputElement
        let mapZip = document.getElementById('map-zip') as HTMLInputElement
        let roomCount = document.getElementById('room') as HTMLInputElement
        let propType = document.getElementById('prop-type') as HTMLInputElement
        let country = document.getElementById('country') as HTMLInputElement
        let guestHave = document.getElementById('guest-have') as HTMLInputElement
        let placeType = document.getElementById('place-type') as HTMLInputElement
        let bedCount = document.getElementById('bedcount') as HTMLInputElement
        let bathroom = document.getElementById('bathroom') as HTMLInputElement
        let amenities = document.getElementById('amenities') as HTMLInputElement
        let city = document.getElementById('city') as HTMLInputElement
        let error = document.getElementsByClassName('error') as HTMLCollectionOf<HTMLElement>
        
        if( 
            city.value !== '' &&
            mapCountry.value !== '' && 
            mapAddress.value !== '' &&
            mapCity.value !== '' &&
            mapZip.value !== '' &&
            roomCount.value !== '' &&
            propType.value !== '' &&
            country.value !== '' &&
            guestHave.value !== '' &&
            bedCount.value !== '' &&
            bathroom.value !== '' &&
            placeType.value !== '' &&
            amenities.value !== ''){
            error[0].style.display = 'none'
            this.props.setCurrClass('scene')
        }
        else{
            error[0].style.display = 'block'
        }
    }

    getData(){
        Axios.get(`https://us1.locationiq.com/v1/search.php?key=f79c1e405d9868&q=${this.state.street},${this.state.city},${this.state.country}&street=${this.state.street}&city=${this.state.city}&country=${this.state.country}&postalcode=${this.state.postal_code}&format=json`)
            .then(res => (
                this.setState({
                    data:res.data
                })
            ))
    }

    updateMap = () => {
        let country = document.getElementById('map-country') as HTMLInputElement
        let address = document.getElementById('map-address') as HTMLInputElement
        let city = document.getElementById('map-city') as HTMLInputElement
        let postalcode = document.getElementById('map-zip') as HTMLInputElement

        this.setState({
            street:address.value.toString(),
            city:city.value.toString(),
            country:country.value.toString(),
            postal_code:postalcode.value.toString(),
        })

        this.getData()
    }

    render() {
        const {data} = this.state
        return (
            <div className="basic-info-place-wrapper">
                <div className="inputs">
                    <div className="title">
                        <h1>Basic Information</h1>
                    </div>
                    <div className="sub-title">Place Type</div>
                    <div className="input">
                        <div>Place Type</div>
                        <div>
                            <input type="text" name="place-type" id="place-type"/>
                        </div>
                    </div>
                    <div className="input">
                        <div>City</div>
                        <div>
                            <input type="text" name="city" id="city"/>
                        </div>
                    </div>
                    <div className="input">
                        <div>Country</div>
                        <div>
                            <input type="text" name="country" id="country"/>
                        </div>
                    </div>
                    <div className="input">
                        <div>Property Type</div>
                        <div>
                            <input type="text" name="prop-type" id="prop-type"/>
                        </div>
                    </div>
                    <div className="input">
                        <div>What Guest Will Have</div>
                        <div className="gw-have-container">
                            <div className="gw-have">
                                <input type="radio" name="gw" id="entire" value="Entire Place" checked/>
                                <label htmlFor='entire'>Entire Place</label>
                                <div>
                                    Guest have the whole place of themselves. This usually include a bedroom, a bathroom, and a kitchen
                                </div>
                            </div>
                            <div className="gw-have">
                                <input type="radio" name="gw" id="private" value="Private Room"/>
                                <label htmlFor='private'>Private Room</label>
                                <div>
                                    Guest have their own private room for sleeping. Other areas could be shared
                                </div>
                            </div>
                            <div className="gw-have">
                                <input type="radio" name="gw" id="shared" value="Shared Room"/>
                                <label htmlFor='shared'>Shared Room</label>
                                <div>
                                    Guests sleep in a bedroom or a common area that could be shared with others.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-title">Bedrooms</div>
                    <div className="input">
                        <div>Available Room</div>
                        <div>
                            <input type="number" name="room" id="room"/>
                        </div>
                    </div>
                    <div className="input">
                        <div>Beds Count</div>
                        <div>
                            <input type="number" name="bedcount" id="bedcount"/>
                        </div>
                    </div>
                    <div className="sub-title">Bathrooms</div>
                    <div className="input">
                        <div>Available BathRoom</div>
                        <div>
                            <input type="number" name="bathroom" id="bathroom"/>
                        </div>
                    </div>
                    <div className="sub-title">Amenities</div>
                    <div className="input">
                        <textarea name="amenities" id="amenities" cols={30} rows={10}></textarea>
                        <div className="note">
                            *Note : Put comma "," after each item. (Example : Foods, drinks)
                        </div>
                    </div>
                    <div className="sub-title">Location</div>
                    <div className="col-md-12 location-wrapper">
                        <div className="input-wrapper">
                            <div className="input">
                                <div>Country</div>
                                <div>
                                    <input type="text" name="map-country" id="map-country" onChange={this.updateMap}/>
                                </div>
                            </div>
                            <div className="input">
                                <div>Street Address</div>
                                <div>
                                    <input type="text" name="map-address" id="map-address" onChange={this.updateMap}/>
                                </div>
                            </div>
                            <div className="input">
                                <div>City</div>
                                <div>
                                    <input type="text" name="map-city" id="map-city" onChange={this.updateMap}/>
                                </div>
                            </div>
                            <div className="input">
                                <div>Zip Code</div>
                                <div>
                                    <input type="text" name="map-zip" id="map-zip" onChange={this.updateMap}/>
                                </div>
                            </div>
                        </div>
                        <div className="map-widget" id='map-widget'>
                            <LeafletMap
                                center={[Number(data[0].lat), Number(data[0].lon)]}
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
                                <Marker position={[data[0].lat, data[0].lon]}>
                                    <Popup>
                                        asd
                                    </Popup>
                                </Marker>
                            </LeafletMap>
                        </div>
                    </div>
                    <div className="input">
                        <div className="btn-next">
                            <div className="btn" onClick={this.test}>Next</div>
                            <div className="error">Wrong input !</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BasicInfoPlace
