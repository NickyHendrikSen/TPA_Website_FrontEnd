import React from "react"
import "./Places.scss"
import Map from "./Map/Map"

export default class Places extends React.Component{
    places_showMap(){
        var switchs = document.getElementById("places_switchMap") as HTMLInputElement;
        var map = document.getElementsByClassName("places_MapWidget") as HTMLCollectionOf<HTMLElement>;
        if(switchs.checked)
            map[0].style.display = "block";
        else
            map[0].style.display = "none";
    }
    render(){
        return(
            <div className="places_Wrapper">
                <div className="placesNav">
                    <div className="placesNav_left">
                        <button>Dates</button>
                        <button>Guests</button>
                        <button>Work Trip</button>
                        <button>Type of place</button>
                        <button>Price</button>
                        <button>Instant Book</button>
                        <button>More filters</button>
                    </div>
                    <div className="placesNav_right">
                        <span>Show Map</span>
                        <label className="switch">
                        <input type="checkbox" name="" id="places_switchMap" onChange={this.places_showMap}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="places_MapWidget">
                    <Map />
                </div>
            </div>
        )
    }
}