import React, { Component } from 'react'
import dummyPic from "./asd.jpg"
import "./ChatContent.scss"

interface IProps{
    index : number,
    name : string,
    date : string,
}
export default class ChatContent extends Component<IProps> {
    
    state = {
        index: this.props.index,
        name : this.props.name,
        date : this.props.date,
    }
    star(index : number){
        (document.getElementsByClassName('chat_status')[index] as HTMLElement).innerText = "Starred";
    }
    archive(index : number){
        (document.getElementsByClassName('chat_status')[index] as HTMLElement).innerText = "Archived";
    }
    showButton(index : number){
        (document.getElementsByClassName('chat_star')[index] as HTMLElement).style.display = "inline-block";
        (document.getElementsByClassName('chat_archive')[index] as HTMLElement).style.display = "inline-block";
        console.log('asd');
    }
    hideButton(index : number){
        (document.getElementsByClassName('chat_star')[index] as HTMLElement).style.display = "none";
        (document.getElementsByClassName('chat_archive')[index] as HTMLElement).style.display = "none";
        console.log('asd');
    }
    render(){
        return(
        <div className="chat_wrapper" onMouseOver={() => this.showButton(this.state.index)} onMouseLeave={()=>this.hideButton(this.state.index)}>
            <div className="chat_content">
                <img src={dummyPic} alt="" className="chat_image"/>
                <div className="chat_chatInfo">{this.state.name} <br/> {this.state.date}</div>
                <div className="chat_chatContent">asdasdasdasdasd
                    <br/>
                    Jakarta, Indonesia(April 3 - May 5,2019)
                </div>
                <div className="chat_statusPrice">
                    <div className="chat_status">Non Archived</div>
                    <div className="chat_price">$116.53</div>
                </div>
                <div className="chat_starArchive">
                    <button className="chat_star" onClick={()=>this.star(this.state.index)}>Star</button><br/>
                    <button className="chat_archive" onClick={()=>this.archive(this.state.index)}>Archive</button>
                </div>
            </div>
            <button className="chat_starR" onClick={()=>this.star(this.state.index)}>Star</button><br/>
            <button className="chat_archiveR" onClick={()=>this.archive(this.state.index)}>Archive</button>
        </div>
        )
    }
}