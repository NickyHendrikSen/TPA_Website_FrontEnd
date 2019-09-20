import React, { Component } from 'react'
import "./PlacesNavbar.scss"
import Header from "../../Header/Header"
import Places from "../Places"
import Axios from 'axios';
import { Route, RouteComponentProps } from 'react-router';

export class PlacesNavbar extends Component<RouteComponentProps<any>> {

    state = {
        callback:
            {
                country_code:'',
                country_name:'',
                city:'',
                postal:'',
                latitude:'',
                longitude:'',
                IPv4:'',
                state:''
            }
    }

    componentWillMount(){
        Axios.get("https://geoip-db.com/json")
            .then(
                res => ({
                    callback: res.data
                })
            )
    }

    render() {
        const{callback} = this.state
        return (
            <div className="placesNavWrapper">
                <div className="placesNavHeader">
                    <Header/>
                </div>
                <div className="places-contents">
                    <Route path="/Places/:country" component={Places}/> 
                </div>
            </div>
        )
    }
}

export default PlacesNavbar
