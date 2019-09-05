import React from "react"
import axios from "axios"
import Header from "../Header/Header"

export default class PlanList extends React.Component{
    state={
        data:[{
            PlansName:'',
            ExperienceID:'',
            RoomID:'',
            PrivacyType:'',
        }]
    }
    componentWillMount(){
        if(localStorage.getItem('UserID') == "" || localStorage.getItem('UserID') == null){
            window.location.href = "/";
            return;
        }
        axios.get('http://backendtpaweb.herokuapp.com/api/plans')
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
    render(){
        return(
            <div>
                <Header/>
                <div className="savedPlan_Title">
                    Saved Plan
                </div>
                <div>

                </div>
            </div>
        )
    }
}