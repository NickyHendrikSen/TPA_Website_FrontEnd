import React, { Component } from 'react'
import "./PlacesNavbar.scss"
import Header from "../../Header/Header"
import Places from "../Places"

export class PlacesNavbar extends Component {
    render() {
        return (
            <div className="placesNavWrapper">
                <div className="placesNavHeader">
                    <Header/>
                </div>
                <div className="places-contents">
                    <Places />
                </div>
            </div>
        )
    }
}

export default PlacesNavbar
