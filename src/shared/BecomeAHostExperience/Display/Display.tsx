import React, { Component } from 'react'
import "./Display.scss"

interface IProps{
    hostCity:string,
    hostSpoken:string,
}

export class Display extends Component<IProps> {

    render() {
        var city = this.props.hostCity
        var lang = this.props.hostSpoken
        
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
