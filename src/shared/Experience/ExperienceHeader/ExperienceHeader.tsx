import React from "react"
import "./ExperienceHeader.scss"
import axios from "axios"
import Map from "../../Map/Map"
import Experience from "../Experience"
import Header from "../../Header/Header"

export default class ExperienceHeader extends React.Component{
    state = {
        data:[{
            PlansName:'',
        }]
    };
    componentWillMount(){
        if(localStorage.getItem('UserID') == "" || localStorage.getItem('UserID') == null) return;
        axios.get('http://backendtpaweb.herokuapp.com/api/plans/' + localStorage.getItem('UserID'))
        .then(res => {
            this.setState(
                {
                    data: res.data
                }
                )
            // console.log(res);
            }
        )
    }
    exps_showMap(){
        var switchs = document.getElementById("exps_switchMap") as HTMLInputElement;
        var map = document.getElementsByClassName("exps_MapWidget") as HTMLCollectionOf<HTMLElement>;
        var content = document.getElementsByClassName("exps_Wrapper") as HTMLCollectionOf<HTMLElement>;
        if(switchs.checked){
            // content[0].style.width = "60vw";
            // map[0].style.display = "block";
        }
        else{
            // content[0].style.width = "100%";
            // map[0].style.display = "none";
        }
    }
    modal_saveNewList(){
        var planName = (document.getElementById('txtPlanName') as HTMLInputElement);
        if(planName.value == ""){
            planName.style.borderColor = "red";
            alert("Plan name can't be empty");
        }
        else{
            //ADD NEW LIST HERE
            // console.log((document.getElementById('txtPlanPrivacy') as HTMLInputElement).value);
            
            axios({
                url: 'http://backendtpaweb.herokuapp.com/api/plans', 
                method : "POST",
                data : {
                    // "PlansID" : 2,   
                    "UserID" : 11,
                    "PlansName" : "asd",
                    "PrivacyType" : "Public"

                },
                headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }
            ).catch(function(error){
                console.log(error);
            })
            ;
            //CLOSE LIGHTBOX
            (document.getElementsByClassName('exps_saveModal')[0] as HTMLElement).style.display = "none";
            alert('Success Added New List');
        }
    }
    closeSaveModal(){
        (document.getElementsByClassName('exps_saveModal')[0] as HTMLElement).style.display = "none";
    }
    render(){
        return(
            <div className="expsH_Wrapper">
                <div className="exps_saveModal">
                    <div className="exps_saveModalContent">
                        <button className="exps_saveModalClose" onClick={this.closeSaveModal}>X</button>
                        <div className="exps_createPlanTitle">
                            Create New List
                        </div>
                        Name<input type="text" id="txtPlanName"/>
                        Privacy
                        <select name="planPrivacy" id="txtPlanPrivacy">
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                        <button className="exps_createNewListButton" onClick={this.modal_saveNewList}>Create New List</button>
                        <hr/>
                        <div className="exps_createPlanTitle">
                            Saved List
                        </div>
                        {this.state.data.map(e => {
                            return(
                                <div className="exps_planList">
                                    <div className="exps_planName">{e.PlansName}</div>
                                    <div className="exps_planHeart">♡</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="exsH_HeaderWrapper">
                    <div className="expsH_Header">
                        <Header />
                    </div>
                </div>
                {/* <div className="expsNav"> */}
                    {/* <div className="expsNav_left">
                        <button>Dates</button>
                        <button>Guests</button>
                        <button>Price</button>
                        <button>Time of day</button>
                        <button>Language offered</button>
                    </div> */}
                    {/* <div className="expsNav_right">
                        <span>Show Map</span>
                        <label className="switch">
                        <input type="checkbox" name="" id="exps_switchMap" onChange={this.exps_showMap}/>
                            <span className="slider round"></span>
                        </label>
                    </div> */}
                {/* </div> */}
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