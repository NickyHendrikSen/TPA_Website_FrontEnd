import React, { Component } from 'react'
import './ScenePlace.scss'

export class ScenePlace extends Component {
    render() {
        return (
            <div className="scene-wrapper">
                <div className="inputs">
                    <div className="title">
                        <h1>Place</h1>
                    </div>
                    <div className="sub-title">Description</div>
                    <div className="input">
                        <div>Place Description</div>
                        <div>
                            <input type="text" name="desc" id="desc"/>
                        </div>
                    </div>
                    <div className="sub-title">Name</div>
                    <div className="input">
                        <div>Place Name</div>
                        <div>
                            <input type="text" name="name" id="name"/>
                        </div>
                    </div>
                    <div className="sub-title">Photo</div>
                </div>
            </div>
        )
    }
}

export default ScenePlace
