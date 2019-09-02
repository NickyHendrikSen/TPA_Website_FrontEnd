import React, { Component } from 'react'
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet'
import "../../../Places/PlacesGridSystem/PlacesGridSystems.scss"
import "./DetailPageMap.scss"

interface IProps{
  lat:number,
  lng:number,
  price:number,
  name:string,
}

export class DetailPageMap extends Component<IProps> {

    state = {
      lat:this.props.lat,
      lng:this.props.lng,
      price:this.props.price,
      name:this.props.name
    }

    render() {
        const{lat, lng, price, name} = this.state
        return (
          <LeafletMap className="col-md-12 map-wrapper"
              center={[lat, lng]}
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
              <Marker position={[lat, lng]}>
                  <Popup>
                      • Name : {name}
                      <br/>
                      • Price : ${price} / Night
                  </Popup>
              </Marker>
          </LeafletMap>
        )
    }
}

export default DetailPageMap
