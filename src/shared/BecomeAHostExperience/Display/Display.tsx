import React, { Component } from 'react'
import "./Display.scss"

interface IProps{
    hostCity:string,
    hostSpoken:string,
}

export class Display extends Component<IProps> {
    state={
        hostCity:this.props.hostCity,
        hostSpoken:this.props.hostSpoken,
    }
    render() {
        var city = this.state.hostCity
        var lang = this.state.hostSpoken
        
        if(city === '' || lang === '') {
            city = 'Not Set'
            lang = 'Not Set'
        }

        return (
            <div className="desc-wrapper">
                <i className="far fa-images fa-5x"></i>
                <div className="text-wrapper">
                    <div className="text-container">
                        <div className="text"><i className="fas fa-map-marker-alt"></i>{city}</div>
                        <div className="text"><i className="fas fa-comments"></i>{lang}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display
