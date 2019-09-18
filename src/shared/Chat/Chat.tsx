import React from "react"
import Header from "../Header/Header"
import ChatContent from "./ChatContent/ChatContent"
import "./Chat.scss";

export default class Chat extends React.Component{
    state={
        data:[{

        },
        {
            
        }]
    }
    componentWillMount(){
        if(localStorage.getItem('UserID') == "" || localStorage.getItem('UserID') == null){
            window.location.href = "/";
        }

    }
    render(){
        return(
            <div>
                <Header />
                <hr/>
                {/* //Loop here */}
                {this.state.data.map( (e, i)=> {
                    return(
                        <ChatContent index = {i}/>
                    )
                })}
            </div>
        )
    }
}