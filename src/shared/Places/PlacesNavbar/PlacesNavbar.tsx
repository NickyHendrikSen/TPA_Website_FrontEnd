import React, { Component } from 'react'
import "./PlacesNavbar.scss"

export class PlacesNavbar extends Component {
    places_showMap(){
        var switchs = document.getElementById("places_switchMap") as HTMLInputElement;
        var map = document.getElementsByClassName("places_MapWidget") as HTMLCollectionOf<HTMLElement>;
        var listContainer = document.getElementsByClassName("list-wrapper") as HTMLCollectionOf<HTMLElement>;
        var containerRoom = document.getElementsByClassName("col-slider-2 frame-container") as HTMLCollectionOf<HTMLElement>;
        if(switchs.checked){
            map[0].style.display = "block";
            listContainer[0].style.width = "60%";
            for(let i = 0; i < 10; i++){
                containerRoom[i].style.width = "100%";
            }
        } else {
            map[0].style.display = "none";
            listContainer[0].style.width = "100%";
            for(let i = 0; i < 10; i++){
                containerRoom[i].style.width = "20%";
            }
        }
    }
    render() {
        return (
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
                {/* <div className="placesNav_right">
                    <span>Show Map</span>
                    <label className="switch">
                    <input type="checkbox" name="" id="places_switchMap" onChange={this.places_showMap}/>
                        <span className="slider round"></span>
                    </label>
                </div> */}
            </div>
        )
    }
}

export default PlacesNavbar
