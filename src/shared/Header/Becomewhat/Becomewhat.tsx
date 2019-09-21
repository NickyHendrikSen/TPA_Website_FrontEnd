import React, { Component } from 'react'
import './Becomewhat.scss'
import { Link } from 'react-router-dom'

export class Becomewhat extends Component {
    render() {
        return (
            <div className="become-wrapper">
                <div className="become-container">
                    <div className="left-container">
                        <i className="fas fa-hotel fa-8x" style={{width:'100%'}}></i>
                        <Link to={'/become-a-host-place'}>
                            <button className="btn-left">Host a Place</button>
                        </Link>
                    </div>
                    <div className="right-container">
                        <i className="fas fa-users fa-8x" style={{width:'100%'}}></i>
                        <Link to={'/become-a-host-experience'}>
                            <button className="btn-right">Host an Experience</button>
                        </Link>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Becomewhat
