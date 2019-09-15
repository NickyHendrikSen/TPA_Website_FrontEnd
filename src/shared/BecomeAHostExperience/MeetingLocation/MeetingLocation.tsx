import React, { Component } from 'react'
import {Map as LeafletMap, TileLayer, Marker, Popup, CircleMarker, Circle} from 'react-leaflet'
import L, { Layer } from 'leaflet'
import './MeetingLocation.scss'
import '../utils.scss'
import Axios from 'axios'

interface IProps{
    setMeetingLocation:any
}

export class MeetingLocation extends Component<IProps> {

    state={
        name:'',
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

    getData(){
        Axios.get(`https://us1.locationiq.com/v1/search.php?key=f79c1e405d9868&q=${this.state.name}&street=${this.state.street}&city=${this.state.city}&country=${this.state.country}&postalcode=${this.state.postal_code}&format=json`)
            .then(res => (
                this.setState({
                    data:res.data
                })
            ))
    }

    updateMap = () => {
        let name = document.getElementById('name') as HTMLInputElement
        let country = document.getElementById('country') as HTMLInputElement
        let address = document.getElementById('address') as HTMLInputElement
        let city = document.getElementById('city') as HTMLInputElement
        let postalcode = document.getElementById('zip') as HTMLInputElement

        this.setState({
            name:name.value.toString(),
            street:address.value.toString(),
            city:city.value.toString(),
            country:country.value.toString(),
            postal_code:postalcode.value.toString(),
        })

        this.getData()
    }

    test = () => {
        let name = document.getElementById('name') as HTMLInputElement
        let country = document.getElementById('country') as HTMLInputElement
        let address = document.getElementById('address') as HTMLInputElement
        let city = document.getElementById('city') as HTMLInputElement
        let postalcode = document.getElementById('zip') as HTMLInputElement
        let error = document.getElementsByClassName('error') as HTMLCollectionOf<HTMLElement>

        let position = [this.state.data[0].lat, this.state.data[0].lon]

        if(name.value === '' ||
            country.value === '' ||
            address.value === '' ||
            city.value === '' ||
            postalcode.value === ''){
            error[4].style.display = 'block';
        } else {
            error[4].style.display = 'none';
            this.props.setMeetingLocation(position, country.value, address.value, city.value, 'finish')
        }

    }

    render() {

        const {data} = this.state

        return (
            <div className="col-md-12 meeting-wrapper">
                <div className="title">
                    <h2>Meeting Location</h2>    
                </div>
                <div className="col-md-6 meeting-container">
                    <div className="input">
                        <div>Location Name</div>
                        <div>
                            <input type="text" name="name" id="name" onChange={this.updateMap}/>
                        </div>
                    </div>
                    <div className="input">
                        <div>Country</div>
                        <div>
                            <input type="text" name="country" id="country" onChange={this.updateMap}/>
                        </div>
                    </div>
                    <div className="input">
                        <div>Street Address</div>
                        <div>
                            <input type="text" name="address" id="address" onChange={this.updateMap}/>
                        </div>
                    </div>
                    <div className="input">
                        <div>City</div>
                        <div>
                            <input type="text" name="city" id="city" onChange={this.updateMap}/>
                        </div>
                    </div>
                    <div className="input">
                        <div>Zip Code</div>
                        <div>
                            <input type="text" name="zip" id="zip" onChange={this.updateMap}/>
                        </div>
                    </div>
                    <div className="btn-next">
                        <div className="btn" onClick={this.test}>Next</div>
                        <div className="error">Wrong input !</div>
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
                        <CircleMarker
                            center={[Number(data[0].lat), Number(data[0].lon)]}
                            fillColor="blue" 
                            radius={50}/>
                    </LeafletMap>
                </div>
            </div>
        )
    }
}

export default MeetingLocation
