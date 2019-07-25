import React from "react"
import "./ExperienceHeader.scss"
import Map from "../../Map/Map"
import Experience from "../Experience"
import Header from "../../Header/Header"

export default class ExperienceHeader extends React.Component{
    exps_showMap(){
        var switchs = document.getElementById("exps_switchMap") as HTMLInputElement;
        var map = document.getElementsByClassName("exps_MapWidget") as HTMLCollectionOf<HTMLElement>;
        var content = document.getElementsByClassName("exps_Wrapper") as HTMLCollectionOf<HTMLElement>;
        if(switchs.checked){
            content[0].style.width = "60vw";
            map[0].style.display = "block";
        }
        else{
            content[0].style.width = "100%";
            map[0].style.display = "none";
        }
    }
    render(){
        return(
            <div className="expsH_Wrapper">
                <div className="exsH_HeaderWrapper">
                    <div className="expsH_Header">
                        <Header />
                    </div>
                </div>
                <div className="expsNav">
                    <div className="expsNav_left">
                        <button>Dates</button>
                        <button>Guests</button>
                        <button>Price</button>
                        <button>Time of day</button>
                        <button>Language offered</button>
                    </div>
                    <div className="expsNav_right">
                        <span>Show Map</span>
                        <label className="switch">
                        <input type="checkbox" name="" id="exps_switchMap" onChange={this.exps_showMap}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="exps_MapContent">
                    <div className="exps_MapWidget">
                        <Map />
                    </div>
                    <Experience />
                </div>
            </div>
        )
    }
}