import React, { Component } from 'react'
import './ScenePlace.scss'

interface IProps{
    setCurrClass:any
}

export class ScenePlace extends Component<IProps> {

    view = () => {

    }

    doUpload(){

    }

    test = () => {
        let desc = document.getElementById('desc') as HTMLInputElement
        let name = document.getElementById('name') as HTMLInputElement
        let image = document.getElementById('image') as HTMLInputElement
        let error = document.getElementsByClassName('error') as HTMLCollectionOf<HTMLElement>

        if(
            desc.value !== '' &&
            name.value !== '' &&
            image.value !== ''
        ){
            error[1].style.display = 'none'
            this.props.setCurrClass('guests')
        }
        else{
            error[1].style.display = 'block'
        }

    }

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
                    <div className="input">
                        <div className="file-container">
                            <i className="far fa-save fa-8x"></i>
                            <input type="file" name="" id="image" onChange={this.view}/>
                            <label htmlFor="image" onChange={this.doUpload}>Choose an Image</label>
                        </div>
                    </div>
                    <div className="input">
                        <div className="btn-next">
                            <div className="btn" onClick={this.test}>Next</div>
                            <div className="error">Wrong input !</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScenePlace
