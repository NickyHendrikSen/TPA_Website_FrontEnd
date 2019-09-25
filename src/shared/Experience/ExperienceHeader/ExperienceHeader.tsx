import React from "react"
import "./ExperienceHeader.scss"
import axios from "axios"
import Map from "../../Map/Map"
import Experience from "../Experience"
import Header from "../../Header/Header"
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet'

export default class ExperienceHeader extends React.Component{
    state = {
        data:[{
            PlansID:'',
            PlansName:'',
        }],
        experience:[{
            experience_title:'',
            address:{location:{coordinates:[]}}
        }],
        isLoading:true
    };
    none = 0
    componentWillMount(){
        if(localStorage.getItem('UserID') == "" || localStorage.getItem('UserID') == null) window.location.href = "/";
        axios.all([
            axios.get('http://localhost:27017/api/plans/' + localStorage.getItem('UserID')),
            axios.get('http://backendtpaweb.herokuapp.com/api/experience')    
        ])
        .then(axios.spread((plansRes, expRes) => {
            this.setState({
                data:plansRes.data,
                experience:expRes.data,
                isLoading:false
            })
        })
        )
    }
    componentDidMount(){
        // if(this.state.data[0].PlansName == ''){
        if(this.none == 1){
            (document.getElementsByClassName('exps_planList')[0] as HTMLElement).style.display = "none";    
        }
        // }
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
            axios({
                url: 'http://localhost:27017/api/plans', 
                method : "POST",
                data : {
                    // "PlansID" : 2,   
                    "UserID" : Number(localStorage.getItem('UserID')),
                    "PlansName" : (document.getElementById('txtPlanName') as HTMLInputElement).value + "",
                    "PrivacyType" : (document.getElementById('txtPlanPrivacy') as HTMLInputElement).value + "",

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
            window.location.reload();
        }
    }
    love(Plansid : string){
        var a = (document.getElementsByClassName('exps_planHeart')) as HTMLCollectionOf<HTMLElement>;

        if((document.getElementById("love" + Plansid) as HTMLElement).style.color == "white"){
            //insert
            (document.getElementById("love" + Plansid) as HTMLElement).style.color = "red";
            axios({
                url: 'http://localhost:27017/api/experience-plans', 
                method : "POST",
                data : {
                    "ExperienceID": parseInt(localStorage.getItem('ExperienceChosen') + ""),
                    "PlansID": parseInt(Plansid + "")
                },
                headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }
            );
            alert('Experience Saved');
            window.location.reload();
        }
        else{
            //delete
            (document.getElementById("love" + Plansid) as HTMLElement).style.color = "white";
            axios({
                url: 'http://localhost:27017/api/delete-experience-plans', 
                method : "POST",
                data : {
                    "ExperienceID": parseInt(localStorage.getItem('ExperienceChosen') + ""),
                    "PlansID": parseInt(Plansid + "")
                },
                headers:{"Content-Type": "application/x-www-form-urlencoded"}
                }
            );
            alert('Experience Removed');
            window.location.reload();
        }
    }
    closeSaveModal(){
        (document.getElementsByClassName('exps_saveModal')[0] as HTMLElement).style.display = "none";
    }
    render(){
        // console.log(this.state.experience)
        if(this.state.isLoading){
            return(
                <div>Loading..</div> 
            )
        }
        return(
            <div className="expsH_Wrapper">
                {console.log(this.state.data)}
                <div className="exps_saveModal">
                    <div className="exps_saveModalContent">
                        <button className="exps_saveModalClose" onClick={this.closeSaveModal}>X</button>
                        <div className="exps_createPlanTitle">
                            Create New List
                        </div>
                        Name<input type="text" id="txtPlanName"/>
                        Privacy
                        <select name="planPrivacy" id="txtPlanPrivacy">
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                        </select>
                        <button className="exps_createNewListButton" onClick={this.modal_saveNewList}>Create New List</button>
                        <hr/>
                        <div className="exps_createPlanTitle">
                            Saved List
                        </div>
                        {this.state.data == null ? "" : this.state.data.map(e => {
                            return(
                                <div className="exps_planList">
                                    <div className="exps_planName">{e.PlansName}</div>
                                    <div className="exps_planHeart" id={"love" + e.PlansID} onClick={() => this.love(e.PlansID)}>♡</div>
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
                <div className="exps_MapContent">
                    <div className="exps_MapWidget">
                    <LeafletMap
                            center={[this.state.experience[0].address.location.coordinates[0], this.state.experience[0].address.location.coordinates[1]]}
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
                            {this.state.experience.map((loc, index) => 
                                <Marker key={index} position={[loc.address.location.coordinates[0], loc.address.location.coordinates[1]]}>
                                    <Popup>
                                        {loc.experience_title} 
                                    </Popup>
                                </Marker>
                            )}
                    </LeafletMap>
                    </div>
                    <Experience />
                </div>
            </div>
        )
    }
}