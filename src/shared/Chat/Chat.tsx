import React from "react"
import Header from "../Header/Header"
import ChatContent from "./ChatContent/ChatContent"
import "./Chat.scss";

export default class Chat extends React.Component{
    state={
        data:[{
            name : "Jo",
            date : "06 June 2019",
        },
        {
            name : "Jo",
            date : "06 June 2019",
            
        },
        {
            name : "Jo",
            date : "06 June 2019",
        },
        {
            name : "Jo",
            date : "06 June 2019",
            
        }]
    }
    componentWillMount(){
        if(localStorage.getItem('UserID') == "" || localStorage.getItem('UserID') == null){
            window.location.href = "/";
        }
    }
    filter(){
        var chat = (document.getElementsByClassName('chat_wrapper') as HTMLCollectionOf<HTMLElement>);
        var status = (document.getElementById('filterStatus') as HTMLSelectElement);
        console.log(chat.length);
        for(let i = 0; i < chat.length; i++){
            if((document.getElementsByClassName('chat_status')[i] as HTMLElement).innerText == status.value){
                chat[i].style.display = "flex";
            }
            else{
                chat[i].style.display = "none";
            }
        }
    }
    render(){
        return(
            <div>
                <Header />
                <hr/>
                {/* //Loop here */}
                <div className="chat_filter">
                    Filters : &nbsp;&nbsp;
                    <select name="" id="filterStatus">
                        <option value="Non Archived">Non Archived</option>
                        <option value="Archived">Archived</option>
                        <option value="Starred">Starred</option>
                    </select>
                    <button onClick={this.filter}>Filter</button>
                </div>
                <hr/>
                {this.state.data.map( (e, i)=> {
                    return(
                        <ChatContent 
                        index = {i}
                        name = {e.name}
                        date = {e.date}
                        />
                    )
                })}
            </div>
        )
    }
}