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
            axios.get('http://backendtpaweb.herokuapp.com/api/plans/' + localStorage.getItem('UserID')),
            axios.get('http://backendtpaweb.herokuapp.com/api/experience')    
        ])
        .then(axios.spread((plansRes, expRes) => {
            this.setState({
                data:plansRes.data,
                experience:expRes.data,
                isLoading:false
            })
            // console.log(plansRes);
            // console.log(expRes);
        })
            // if(res.data == null) return;
            // this.setState(
            //         {
            //             data: res.data
            //         }
            //     )
            //     if(res.data[0].PlansName == ''){
            //         this.none = 1;
            //     }
            // // console.log(res);
        )
        // axios.get('http://backendtpaweb.herokuapp.com/api/experience')
        // .then(res => {
        //     this.setState({
        //         experience:res.data
        //     })
        // })
        // console.log(this.state.experience)
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
            //ADD NEW LIST HERE
            // console.log((document.getElementById('txtPlanPrivacy') as HTMLInputElement).value);
            // alert((document.getElementById('txtPlanName') as HTMLInputElement).value + " " + (document.getElementById('txtPlanPrivacy') as HTMLInputElement).value + "")
            axios({
                url: 'http://backendtpaweb.herokuapp.com/api/plans', 
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
        // for(let i = 0; i < a.length; i++){
        //     if(a[i].style.color == "red")
        //     return;
        // }
        if((document.getElementById("love" + Plansid) as HTMLElement).style.color == "white"){
            //insert
            (document.getElementById("love" + Plansid) as HTMLElement).style.color = "red";
            axios({
                url: 'http://backendtpaweb.herokuapp.com/api/experience-plans', 
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
                url: 'http://backendtpaweb.herokuapp.com/api/delete-experience-plans', 
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
                    {/* <LeafletMap
                        center={[50, 10]}
                        zoom={6}
                        maxZoom={10}
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
                        {
                            this.state.experience.map(loc => {
                                return( 
                                    <Marker position={[-6.208428,106.7824432]}>
                                        {console.log(loc.address.location.coordinates[0])}
                                        <Popup>
                                            asd
                                        </Popup>
                                    </Marker>
                                )
                            })
                        }
                    </LeafletMap> */}
                    <LeafletMap
                            center={[50, 10]}
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
                                        {/* • Name : {loc.name}
                                        <br/>
                                        • Price : ${point.price} / Night */}
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