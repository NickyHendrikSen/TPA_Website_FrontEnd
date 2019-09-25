import React from "react"
import axios from "axios"
import Header from "../Header/Header"
import {Link} from "react-router-dom"
import "./PlanList.scss"

export default class PlanList extends React.Component{
    state={
        data:[{
            PlansID:'',
            PlansName:'',
            ExperienceID:'',
            RoomID:'',
            PrivacyType:'',
        }],
        image:[''],
        datas:[{
            PlansID:'',
            PlansName:'',
            ExperienceID:'',
            RoomID:'',
            PrivacyType:'',
            UserID:'',
        }],
        
    }
    recommend=[{
        PlansID:'',
        PlansName:'',
        ExperienceID:'',
        RoomID:'',
        PrivacyType:'',
        UserID:'',
    }]
    componentDidMount(){
        axios.get('http://localhost:27017/api/plans/' + localStorage.getItem('UserID'))
            .then(res => {    
                if(res.data == null) return;
                for(let i = 0; i < res.data.length; i++){
                    // console.log(res.data[i]);
                    //if both data empty
                    if(res.data[i].RoomID == "[]" && res.data[i].ExperienceID == "[]"){
                        (document.getElementsByClassName('savedPlan_images')[i] as HTMLImageElement).style.display = "none";
                    }
                    else if(res.data[i].RoomID != "[]"){
                        var roomid = ((res.data[i].RoomID.split('[')[1]).split(']')[0]).split(',')[0];
                        // temp.push(res.data[i]);
                        axios.get('http://localhost:27017/api/rooms/' + roomid)
                        .then(ress => {    
                            (document.getElementsByClassName('savedPlan_images')[i] as HTMLImageElement).src = ress.data.Images.picture_url;
                            // temps.push(ress.data.Images.picture_url);
                        }
                        )
                    }
                    else{
                        var expid = ((res.data[i].ExperienceID.split('[')[1]).split(']')[0]).split(',')[0];
                        // temp.push(res.data[i]);
                        axios.get('http://localhost:27017/api/experience/' + expid)
                        .then(ress => {    
                            (document.getElementsByClassName('savedPlan_images')[i] as HTMLImageElement).src = ress.data.Images[0];
                            // temps.push(ress.data.Images[0]);
                        }
                        )
                    }
                }   
            }
        )
        
    }
    componentWillMount(){
        if(localStorage.getItem('UserID') == "" || localStorage.getItem('UserID') == null){
            window.location.href = "/";
            return;
        }
        axios.get('http://localhost:27017/api/plans/' + localStorage.getItem('UserID'))
            .then(res => {     
                this.setState({
                    data: res.data
                })      
            }
        )

        axios.get('http://localhost:27017/api/plans')
            .then(res => {
                var recommendTemp = [{
                    RoomID:'', 
                    ExperienceID:'', 
                    PlansID:'',
                    PlansName:'',
                    PrivacyType:'',
                    UserID:'',}];
                var recommendRandom = [{ PlansID:'',
                    PlansName:'',
                    ExperienceID:'',
                    RoomID:'',
                    PrivacyType:'',
                    UserID:'',}];
                var image = [''];
                for(let i = 0; i < res.data.length; i++){
                    if(res.data[i].PrivacyType == "Public" && res.data[i].UserID != localStorage.getItem('UserID')){
                        recommendTemp.push(res.data[i]);
                    }
                }
                if(recommendTemp.length <= 7){
                    this.setState(
                        {
                            datas: recommendTemp,
                        }
                    )
                }
                else{
                    // let len = recommendTemp.length;
                    for(let i = 0; i < 6; i++){
                        let rand = 0;
                        rand = parseInt((Math.random() * (recommendTemp.length-1)) + 1 + "");
                        recommendRandom.push(recommendTemp[rand]);
                        recommendTemp.splice(rand, 1);
                    }
                    // console.log(image);
                    // console.log(recommendRandom);
                    this.setState({
                        datas: recommendRandom,
                    })
                }
            }
        )

    }
    render(){
        // console.log(document.getElementsByClassName('savedPlan_images'));
        console.log(this.state.image)
        return(
            <div>
                <Header/>
                <div className="savedPlan_Title">
                    Saved Plan
                </div>
                <div className="savedPlan_contentWrapper">
                    {this.state.data== null ? "" : this.state.data.map(e => {
                        return(
                            <Link to={"/plan-detail/" + e.PlansID}>
                            <div className="savedPlan_content">
                                <div className="savedPlan_image"><img src="" alt="" className="savedPlan_images"/></div>
                                <div className="savedPlan_planName">{e.PlansName == undefined ? "" : e.PlansName}</div>
                                <div className="savedPlan_exp">{((e.ExperienceID.split('[')[1] + "").split(']')[0] + "").split(',')[0] == "" ? 0 : ((e.ExperienceID.split('[')[1] + "").split(']')[0] + "").split(',').length} Experience(s)</div>
                                <div className="savedPlan_room">{((e.RoomID.split('[')[1] + "").split(']')[0] + "").split(',')[0] == "" ? 0 : ((e.RoomID.split('[')[1] + "").split(']')[0] + "").split(',').length} Room(s)</div>
                            </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="savedPlan_Title">
                    Recommended Plan
                </div>
                <div className="savedPlan_contentWrapper">
                    {this.state.datas.length == 1 ? "" : this.state.datas.slice(1, this.state.datas.length).map((e,index) =>{
                        return(
                            <div className="savedPlan_content">
                            <div className="savedPlan_image"><img src="" alt="" className="savedPlan_imagesRec"/></div>
                                <div className="savedPlan_planName">{e.PlansName == undefined ? "" : e.PlansName}</div>
                                <div className="savedPlan_exp">{((e.ExperienceID.split('[')[1] + "").split(']')[0] + "").split(',')[0] == "" ? 0 : ((e.ExperienceID.split('[')[1] + "").split(']')[0] + "").split(',').length} Experience(s)</div>
                                <div className="savedPlan_room">{((e.RoomID.split('[')[1] + "").split(']')[0] + "").split(',')[0] == "" ? 0 : ((e.RoomID.split('[')[1] + "").split(']')[0] + "").split(',').length} Room(s)</div>
                            </div>
                        )   
                    })}
                </div>
            </div>
        )
    }
}