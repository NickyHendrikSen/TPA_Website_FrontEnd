import React, { Component } from 'react'
import '../../Places/PlacesGridSystem/PlacesGridSystems.scss';
import './ListPhotos.scss'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Axios from 'axios';

interface IPhotos{
    url:any,
    image_list:any[]
}

export class ListPhotos extends Component<IPhotos> {

    state = {
        url: this.props.url,
        image_list:this.props.image_list,
        plans:{
            PlansID:'',
            PlansName:'',
            UserID:'',
            PrivacyType:'',
            ExperienceID:[],
            RoomID:[],
        }
    }
    
    componentWillMount(){
        Axios.get('http://backendtpaweb.herokuapp.com/api/plans')
            .then(res => ({
                plans:res.data
            }))
    }

    doViewPhotos(){

    }

    doSave(){

    }

    doShare(){
        let modal = document.getElementsByClassName("share-modal-wrapper") as HTMLCollectionOf<HTMLElement>

        modal[0].style.display = "flex";
        modal[0].style.zIndex = "1";
    }

    closeModal(){
        let modal = document.getElementsByClassName("share-modal-wrapper") as HTMLCollectionOf<HTMLElement>

        modal[0].style.display = "none";
        modal[0].style.zIndex = "-1";        
    }



    render() {

        const {image_list, url} = this.state

        if(ListPhotos.length <= 0){
            // const showAllPhotos = image_list.map((url, index) => {
            //     return(

            //     )
            // })
        }
        else{

        }

        return (
            <div className="col-md-12 top-list-photos">
                <div className="share-modal-wrapper">
                    <div className="share-modal-container">
                        <div className="close-btn-wrapper">
                            <button type="button" className="close-btn" onClick={this.closeModal}>X</button>
                        </div>
                        <h1>Share</h1>
                        <div className="share">
                            <i className="fab facebook"></i>
                            <div className="text">Facebook</div>
                        </div>
                        <div className="share">
                            <i className="far fa-envelope"></i>
                            <div className="text">Email</div>
                        </div>
                        <CopyToClipboard text={window.location.href}>
                            <div className="share">
                                <i className="fas fa-clipboard-list"></i>
                                <div className="text">Copy to clipboard</div>
                            </div>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="col-md-4 big-photos">
                    <div className="col-md-12 big-photo" style={{backgroundImage: `url(${this.state.url})`}}></div>
                    <div className="col-md-12 big-photo" style={{backgroundImage: `url(${this.state.url})`}}></div>
                </div>
                <div className="col-md-4 small-photos">
                    <div className="icons-wrapper">
                        <div className="top-icon-wrapper">
                            <div className="share-icon" onClick={this.doShare}>
                                <button className="far fa-share-square share"></button>
                            </div>
                            <div className="save-icon" onClick={this.doSave}>
                                <button className="far fa-heart save"></button>
                            </div>
                            <div className="view-photos" onClick={this.doViewPhotos}>
                                <div>
                                    <button className="far fa-images view"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="small-photo" style={{backgroundImage: `url(${this.state.url})`}}></div>
                    <div className="small-photo" style={{backgroundImage: `url(${this.state.url})`}}></div>
                    <div className="small-photo" style={{backgroundImage: `url(${this.state.url})`}}></div>
                    <div className="small-photo" style={{backgroundImage: `url(${this.state.url})`}}></div>
                </div>
            </div>
        )
    }
}

export default ListPhotos
