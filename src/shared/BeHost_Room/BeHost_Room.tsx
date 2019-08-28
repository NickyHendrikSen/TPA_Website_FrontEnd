import React from "react"
import "./BeHost_Room.scss"
import logo from "./img/logo.png"
import {Link} from "react-router-dom"

export default class BeHost_Room extends React.Component{
    changeOption(){
        var placeType = document.getElementById('PlaceType') as HTMLInputElement;
        var propertyType = document.getElementById('PropertyType') as HTMLInputElement;
        propertyType.disabled = false;
        // console.log(placeType.value);
        if(placeType.value == "Apartment"){
            propertyType.innerHTML = '<option value ="none" class="bhr_step1Question_selectOption">Select One</option><option value ="Apartment">Apartment</option><option value ="Condominium">Condominium</option><option value ="Casa particular (Cuba)">Casa particular (Cuba)</option><option value ="Loft">Loft</option><option value ="Serviced Apartment">Serviced Apartment</option>';
        }
        else if(placeType.value == "House")
        {
            propertyType.innerHTML = '<option value="none" class="bhr_step1Question_selectOption">Select One</option><option value="house">House</option><option value="bungalow">Bungalow</option><option value="cabin">Cabin</option><option value="casa_particular">Casa particular (Cuba)</option><option value="chalet">Chalet</option><option value="cottage">Cottage</option><option value="cycladic_house">Cycladic house (Greece)</option><option value="dammuso">Dammuso</option><option value="dome_house">Dome house</option><option value="earthhouse">Earth house</option><option value="farm_stay">Farm stay</option><option value="houseboat">Houseboat</option><option value="hut">Hut</option><option value="lighthouse">Lighthouse</option><option value="pension">Pension (South Korea)</option><option value="shepherds_hut">Shepherd\'s hut (U.K., France)</option><option value="tiny_house">Tiny house</option><option value="townhouse">Townhouse</option><option value="trullo">Trullo</option><option value="villa">Villa</option>';
        }
        else if(placeType.value == "Secondary Unit"){
            propertyType.innerHTML = '<option value="none" class="bhr_step1Question_selectOption">Select One</option><option value="guesthouse">Guesthouse</option><option value="guest_suite">Guest suite</option><option value="farm_stay">Farm stay</option>';
        }
        else if(placeType.value == "Unique Space"){
            propertyType.innerHTML = '<option value = "none" class="bhr_step1Question_selectOption">Select One</option><option value="barn">Barn</option><option value="boat">Boat</option><option value="bus">Bus</option><option value="rv">Camper/RV</option><option value="campsite">Campsite</option><option value="castle">Castle</option><option value="cave">Cave</option><option value="dome_house">Dome house</option><option value="earthhouse">Earth house</option><option value="farm_stay">Farm stay</option><option value="houseboat">Houseboat</option><option value="hut">Hut</option><option value="igloo">Igloo</option><option value="island">Island</option><option value="lighthouse">Lighthouse</option><option value="pension">Pension (South Korea)</option><option value="plane">Plane</option><option value="shepherds_hut">Shepherd\'s hut (U.K., France)</option><option value="tent">Tent</option><option value="tiny_house">Tiny house</option><option value="tipi">Tipi</option><option value="train">Train</option><option value="treehouse">Treehouse</option><option value="windmill">Windmill</option><option value="yurt">Yurt</option>';
        }
        else if(placeType.value == "Bed and breakfast"){
            propertyType.innerHTML = '<option value = "none" class="bhr_step1Question_selectOption">Select One</option><option value="bnb">Bed and breakfast</option><option value="casa_particular">Casa particular (Cuba)</option><option value="farm_stay">Farm stay</option><option value="minsu">Minsu (Taiwan)</option><option value="lodge">Nature lodge</option><option value="ryokan">Ryokan (Japan)</option>';
        }
        else if(placeType.value == "Boutique hotel"){
            propertyType.innerHTML = '<option value = "none" class="bhr_step1Question_selectOption">Select One</option><option value="boutique_hotel">Boutique hotel</option><option value="aparthotel">Aparthotel</option><option value="heritage_hotel">Heritage hotel (India)</option><option value="hostel">Hostel</option><option value="hotel">Hotel</option><option value="lodge">Nature lodge</option><option value="resort">Resort</option><option value="serviced_apartment">Serviced apartment</option><option value="kezhan">Kezhan</option>';
        }
    }
    validate1(){
        var placeType = document.getElementById('PlaceType') as HTMLInputElement;
        var propertyType = document.getElementById('PropertyType') as HTMLInputElement;
        var guestHave = document.getElementsByName('guestHave') as NodeListOf<HTMLInputElement>;
        console.log(placeType.value);
        if(placeType.value == "none"){
            (document.getElementById('bhr_step1Question_errPlace') as HTMLElement).style.display = "block";
        }
        else{
            (document.getElementById('bhr_step1Question_errPlace') as HTMLElement).style.display = "none";
        }

        if(propertyType.value == "none"){
            (document.getElementById('bhr_step1Question_errProperty') as HTMLElement).style.display = "block";
        }
        else{
            (document.getElementById('bhr_step1Question_errProperty') as HTMLElement).style.display = "none";
        }
        var checked = false;
        for(let i = 0; guestHave[i] != null; i++){
            if(guestHave[i].checked == true){
                checked = true;
                break;
            }
        }
        if(checked == true){
            (document.getElementById('bhr_step1Question_errGuestHave') as HTMLElement).style.display = "none";
        }
        else{
            (document.getElementById('bhr_step1Question_errGuestHave') as HTMLElement).style.display = "block";
        }



    }
    render(){
    return(
            <div className="bhr">
                <div className="bhr_Header">
                    <div className="bhr_logo">
                        <Link to="/"><img src={logo} alt=""/></Link>
                    </div>
                    <div className="bhr_step">
                        Step 1: Start with the basics
                    </div>
                </div>
                <div className="bhr_progressBar">
                    <div className="bhr_progress"></div>
                    <div className="bhr_progressBar1"></div>
                    <div className="bhr_progressBar2"></div>
                    <div className="bhr_progressBar3"></div>
                    <div className="bhr_progressBar4"></div>
                    <div className="bhr_progressBar5"></div>
                    <div className="bhr_progressBar6"></div>
                    <div className="bhr_progressBar7"></div>
                </div>
                <div className="bhr_step1Content">
                    <div className="bhr_step1Question">
                        <div className="bhr_step1Question_title">
                            What kind of place are you listing?
                        </div>
                        <div className="bhr_step1Question_content">
                            First, let’s narrow things down
                        </div>
                        <select name="" id="PlaceType" className="bhr_step1Question_select" onChange={this.changeOption}>
                            <option value="none" className="bhr_step1Question_selectOption">Select One</option>
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>
                            <option value="Secondary Unit">Secondary Unit</option>
                            <option value="Unique Space">Unique Space</option>
                            <option value="Bed and breakfast">Bed and breakfast</option>
                            <option value="Boutique hotel">Boutique hotel</option>
                        </select> 
                        <div id="bhr_step1Question_errPlace" className="bhr_step1Question_errLbl">Please pick one</div>
                        <div className="bhr_step1Question_content">
                        Now choose a property type
                        </div>
                        <select name="" id="PropertyType" disabled={true} className="bhr_step1Question_select">
                            <option value="none" className="bhr_step1Question_selectOption">Select One</option>
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>
                            <option value="Secondary Unit">Secondary Unit</option>
                            <option value="Unique Space">Unique Space</option>
                            <option value="Bed and breakfast">Bed and breakfast</option>
                            <option value="Boutique hotel">Boutique hotel</option>
                        </select>
                        <div id="bhr_step1Question_errProperty" className="bhr_step1Question_errLbl">Please pick one</div>
                        <div className="bhr_step1Question_content">
                            How many total rooms does your property have?
                        </div> 
                        <select name="" id="totalRooms" className="bhr_step1Question_select">
                            <option value="2-5">2-5</option>
                            <option value="6-10">6-10</option>
                            <option value="11-20">11-20</option>
                            <option value="21-30">21-30</option>
                            <option value="31-40">31-40</option>
                            <option value="41-50">41-50</option>
                            <option value="50+">50+</option>
                        </select>
                        <div className="bhr_step1Question_content">
                            What will guests have?
                        </div> 
                        <div className="bhr_step1Question_guestHave">
                            <div>
                                <input type="radio" value="Entire Place" name="guestHave"/> Entire Place
                            </div>
                            <div>
                                <input type="radio" value="Private Room" name="guestHave"/> Private Room
                            </div>
                            <div>
                                <input type="radio" value="Shared Room" name="guestHave"/> Shared Room
                            </div>
                        </div>
                        <div id="bhr_step1Question_errGuestHave" className="bhr_step1Question_errLbl">Please pick one</div>
                        <button onClick={this.validate1}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}