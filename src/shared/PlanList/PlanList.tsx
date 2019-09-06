import React from "react"
import axios from "axios"
import Header from "../Header/Header"
import "./PlanList.scss"

export default class PlanList extends React.Component{
    state={
        data:[{
            PlansName:'',
            ExperienceID:'',
            RoomID:'',
            PrivacyType:'',
        }],
        datas:[{
            PlansName:'',
            ExperienceID:'',
            RoomID:'',
            PrivacyType:'',
            UserID:'',
        }],
        recommend:[{
            PlansName:'',
            ExperienceID:'',
            RoomID:'',
            PrivacyType:'',
            UserID:'',
        }]
    }
    componentWillMount(){
        if(localStorage.getItem('UserID') == "" || localStorage.getItem('UserID') == null){
            window.location.href = "/";
            return;
        }
        axios.get('http://backendtpaweb.herokuapp.com/api/plans/' + localStorage.getItem('UserID'))
            .then(res => {
                this.setState(
                    {
                        data: res.data
                    }
                )
                // console.log(res.data);
            }
        )
        axios.get('http://backendtpaweb.herokuapp.com/api/plans')
            .then(res => {
                this.setState(
                    {
                        datas: res.data
                    }
                )
                for(let i = 0; i < res.data.length; i++){
                    if(res.data[i].PrivacyType == "Public" && res.data[i].UserID != localStorage.getItem('UserID')){
                        this.state.recommend.push(res.data[i]);
                        console.log('asd')
                    }
                }
                // console.log(res.data);
            }
        )

    }
    render(){
        return(
            <div>
                <Header/>
                <div className="savedPlan_Title">
                    Saved Plan
                </div>
                <div className="savedPlan_contentWrapper">
                    {this.state.data.map(e => {
                        return(
                            <div className="savedPlan_content">
                                <div className="savedPlan_planName">{e.PlansName}</div>
                                <div className="savedPlan_exp">{((e.ExperienceID.split('[')[1] + "").split(']')[0] + "").split(',')[0] == "" ? 0 : ((e.ExperienceID.split('[')[1] + "").split(']')[0] + "").split(',').length} Experience(s)</div>
                                <div className="savedPlan_room">{((e.RoomID.split('[')[1] + "").split(']')[0] + "").split(',')[0] == "" ? 0 : ((e.RoomID.split('[')[1] + "").split(']')[0] + "").split(',').length} Room(s)</div>
                            </div>
                        )
                    })}
                </div>
                <div className="savedPlan_Title">
                    Recommended Plan
                </div>
                <div className="savedPlan_contentWrapper">
                    {this.state.recommend.slice(1,this.state.recommend.length).map(e =>{
                        return(
                            <div className="savedPlan_content">
                                <div className="savedPlan_planName">{e.PlansName}</div>
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