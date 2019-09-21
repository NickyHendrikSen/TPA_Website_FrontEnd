import React, { Component, Fragment } from 'react'
import '../../Places/PlacesGridSystem/PlacesGridSystems.scss'
import './ListPhotos.scss'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import Axios from 'axios'
import ImageGallery from "react-image-gallery"
import { FacebookShareButton, EmailShareButton } from 'react-share'

interface IPhotos{
    url:any,
    image_list:any[]
}

export class ListPhotos extends Component<IPhotos> {

    state = {
        url: this.props.url,
        image_list:this.props.image_list,
        plans:[
            {
                PlansID:'',
                UserID:'',
                PlansName:'',
                PrivacyType:'',
                ExperienceID:'',
                RoomID:'',
            }
        ],
    }
    
    images= [{
        thumbnail:'',
        original:''
    }]

    componentWillMount(){
        if(localStorage.getItem('UserID') !== null || localStorage.getItem('UserID') !== ''){
            Axios.get(`http://backendtpaweb.herokuapp.com/api/plans/${localStorage.getItem('UserID')}`)
                .then(res => 
                    this.setState({
                        plans:res.data
                    })
                )
        }
    }

    doViewPhotos(){
        let photoList = document.getElementsByClassName('gallery-wrapper') as HTMLCollectionOf<HTMLElement>

        photoList[0].style.display = 'flex'
        photoList[0].style.zIndex = '1'
    }

    doSave(){
        let modal = document.getElementsByClassName("plan-list-wrapper") as HTMLCollectionOf<HTMLElement>

        modal[0].style.display = "flex";
        modal[0].style.zIndex = "1"; 
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

    closePlanModal(){
        let modal = document.getElementsByClassName("plan-list-wrapper") as HTMLCollectionOf<HTMLElement>

        modal[0].style.display = "none";
        modal[0].style.zIndex = "-1";        
    }

    closeViewPhotoModal(){
        let modal = document.getElementsByClassName("image-zoom-wrapper") as HTMLCollectionOf<HTMLElement>

        modal[0].style.display = "none";
        modal[0].style.zIndex = "-1";        
    }

    viewPhoto(url:string){
        let modal = document.getElementsByClassName("image-zoom-wrapper") as HTMLCollectionOf<HTMLElement>
        let modalContainer = document.getElementsByClassName("image-zoom-container") as HTMLCollectionOf<HTMLElement>

        modal[0].style.display = "flex"
        modal[0].style.zIndex = "1"
        modalContainer[0].style.backgroundImage = `url(${url})`
    }

    closeViewPhotogaleryModal(){
        let gallery = document.getElementsByClassName('gallery-wrapper') as HTMLCollectionOf<HTMLElement>

        gallery[0].style.display = 'none'
        gallery[0].style.zIndex = '-1'
    }

    setGallery = () => {
        if(this.state.image_list.length <= 0){
            this.images[0].thumbnail = this.state.url
            this.images[0].original = this.state.url
        }
        else{
            for(var i = 0; i < this.state.image_list.length; i++){
                if(i == 0){
                    this.images[0].thumbnail = this.state.image_list[i];
                    this.images[0].original = this.state.image_list[i];
                    continue;
                }
                let obj = {
                    thumbnail: this.state.image_list[i],
                    original: this.state.image_list[i]
                }
                this.images.push(obj)
            }
        }

    }

    render() {
        
        this.setGallery()
        const {image_list, url, plans} = this.state
        var showAllSmallPhotos;
        var showAllBigPhotos;
        var Gallery; 

        if(image_list.length <= 0){
            showAllBigPhotos = 
                <div className="col-md-4 big-photos">
                    <div className="col-md-12 big-photo" style={{backgroundImage: `url(${this.state.url})`}} onClick={()=>this.viewPhoto(this.state.url)}></div>
                    <div className="col-md-12 big-photo" style={{backgroundImage: `url(${this.state.url})`}} onClick={()=>this.viewPhoto(this.state.url)}></div>
                </div>
            showAllSmallPhotos = 
                <div className="col-md-12 photos-container">
                    <div className="col-md-4 small-photo" style={{backgroundImage: `url(${this.state.url})`}} onClick={()=>this.viewPhoto(this.state.url)}></div>
                    <div className="col-md-4 small-photo" style={{backgroundImage: `url(${this.state.url})`}} onClick={()=>this.viewPhoto(this.state.url)}></div>
                    <div className="col-md-4 small-photo" style={{backgroundImage: `url(${this.state.url})`}} onClick={()=>this.viewPhoto(this.state.url)}></div>
                    <div className="col-md-4 small-photo" style={{backgroundImage: `url(${this.state.url})`}} onClick={()=>this.viewPhoto(this.state.url)}></div>
                </div>
        }
        else{
            showAllSmallPhotos = 
                <div className="col-md-12 photos-container">
                    {image_list.slice(2, 6).map((url, index) => 
                    (    <React.Fragment>
                            <div key={index} className="col-md-4 small-photo" style={{backgroundImage: `url(${url})`}} onClick={()=>this.viewPhoto(url)}></div>
                        </React.Fragment>
                    ))}
                </div>
            showAllBigPhotos = 
            <div className="col-md-4 big-photos">
                {image_list.slice(0, 2).map((url, index) => (
                    <React.Fragment>
                        <div key={index} className="col-md-12 big-photo" style={{backgroundImage: `url(${url})`}} onClick={()=>this.viewPhoto(url)}></div>
                    </React.Fragment>
                ))}
            </div>
        }

        const allPlans = plans.map((plans, index) => {
            return (
                <div className="plans-container" key={index}>
                    <div className="plans">
                        {plans.PlansName}
                    </div>
                    <i className="far fa-heart icon" 
                        // onClick={() =>this.insertPlan(index)}
                        ></i>
                </div>
            )
        })

        return (
            <div className="col-md-12 top-list-photos">
                {console.log(Gallery)}
                <div className="gallery-wrapper">
                    <div className="close-btn-wrapper">
                        <button type="button" className="close-btn" onClick={this.closeViewPhotogaleryModal}>X</button>
                    </div>
                    <div className="gallery-container">
                        <ImageGallery items={this.images}/>
                    </div>
                </div>
                <div className="image-zoom-wrapper">
                    <div className="close-btn-wrapper">
                        <button type="button" className="close-btn" onClick={this.closeViewPhotoModal}>X</button>
                    </div>
                    <div className="image-zoom-container">
                        <div className="image-zoom"></div>
                    </div>
                </div>
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
                <div className="plan-list-wrapper">
                    <div className="plan-list-container">
                        <div className="close-btn-wrapper">
                            <button type="button" className="close-btn" onClick={this.closePlanModal}>X</button>
                        </div>
                        <h1>Save Plan</h1>
                        {allPlans}
                    </div>
                </div>
                <div className="share-modal-wrapper">
                    <div className="share-modal-container">
                        <div className="close-btn-wrapper">
                            <button type="button" className="close-btn" onClick={this.closeModal}>X</button>
                        </div>
                        <h1>Share</h1>
                        <div className="share">
                            <i className="fab facebook"></i>
                            <FacebookShareButton url={window.location.href} >
                                <div className="text">Facebook</div>
                            </FacebookShareButton>
                        </div>
                        <div className="share">
                            <i className="far fa-envelope"></i>
                            <EmailShareButton url={window.location.href} >
                                <div className="text">Email</div>
                            </EmailShareButton>
                        </div>
                        <CopyToClipboard text={window.location.href}>
                            <div className="share">
                                <i className="fas fa-clipboard-list"></i>
                                <div className="text">Copy to clipboard</div>
                            </div>
                        </CopyToClipboard>
                    </div>
                </div>
                {showAllBigPhotos}
                <div className="col-md-4 small-photos">
                    {showAllSmallPhotos}
                </div>
            </div>
        )
    }
}

export default ListPhotos
