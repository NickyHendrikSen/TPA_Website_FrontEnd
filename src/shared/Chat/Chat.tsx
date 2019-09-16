import React from "react"
import Header from "../Header/Header"
import "./Chat.scss";
import dummyPic from "./asd.jpg"

export default class Chat extends React.Component{
    componentWillMount(){
        if(localStorage.getItem('UserID') == "" || localStorage.getItem('UserID') == null){
            window.location.href = "/";
        }

    }
    star(){
        (document.getElementsByClassName('chat_status')[0] as HTMLElement).innerText = "Starred";
    }
    archive(){
        (document.getElementsByClassName('chat_status')[0] as HTMLElement).innerText = "Archived";
    }
    render(){
        return(
            <div>
                <Header />
                <hr/>
                <div className="chat_wrapper">
                    <div className="chat_content">
                        <img src={dummyPic} alt="" className="chat_image"/>
                        <div className="chat_chatInfo">Jojo <br/> Jun 06</div>
                        <div className="chat_chatContent">asdasdasdasdasd
                            <br/>
                            Jakarta, Indonesia(April 3 - May 5,2019)
                        </div>
                        <div className="chat_statusPrice">
                            <div className="chat_status">Accepted</div>
                            <div className="chat_price">$116.53</div>
                        </div>
                        <div className="chat_starArchive">
                            <button className="chat_star" onClick={this.star}>Star</button><br/>
                            <button className="chat_archive" onClick={this.archive}>Archive</button>
                        </div>
                    </div>
                    <button className="chat_starR" onClick={this.star}>Star</button><br/>
                    <button className="chat_archiveR" onClick={this.archive}>Archive</button>
                </div>
            </div>
        )
    }
}