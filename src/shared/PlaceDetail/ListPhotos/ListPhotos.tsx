import React, { Component } from 'react'
import '../../Places/PlacesGridSystem/PlacesGridSystems.scss';
import './ListPhotos.scss'

interface IPhotos{
    url:any
}

export class ListPhotos extends Component<IPhotos> {

    state = {
        url: this.props.url
    }
    
    doViewPhotos(){

    }

    doSave(){

    }

    doShare(){

    }

    render() {
        return (
            <div className="col-md-12 top-list-photos">
                <div className="share-modal-wrapper">
                    asd
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
