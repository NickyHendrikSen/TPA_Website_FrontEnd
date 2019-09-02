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
    
    render() {
        return (
            <div className="col-md-12 top-list-photos">
                <div className="col-md-4 big-photos">
                    <div className="col-md-12 big-photo" style={{backgroundImage: `url(${this.state.url})`}}></div>
                    <div className="col-md-12 big-photo" style={{backgroundImage: `url(${this.state.url})`}}></div>
                </div>
                <div className="col-md-4 small-photos">
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
