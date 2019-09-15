import React, { Component } from 'react'
import "./ExperiencePage.scss"

interface IProps{
    setExperiencePage:any
}

export class ExperiencePage extends Component<IProps> {
    
    test = () => {
        let title = document.getElementById('title') as HTMLInputElement
        let detail = document.getElementById('detail') as HTMLTextAreaElement
        let street = document.getElementById('street') as HTMLTextAreaElement
        let amenity = document.getElementById('amenities') as HTMLTextAreaElement
        let sbring = document.getElementById('sbring') as HTMLTextAreaElement
        let about = document.getElementById('about') as HTMLTextAreaElement
        let error = document.getElementsByClassName('error') as HTMLCollectionOf<HTMLElement>

        let amenities = amenity.value.split(',')
        let sbrings = sbring.value.split(',')

        for(let i = 0; i < amenities.length; i++){
            amenities[i] = amenities[i].trim()
        }
        for(let i = 0; i < sbrings.length; i++){
            sbrings[i] = sbrings[i].trim()
        }

        if(title.value === '' || 
            detail.value === '' || 
            street.value === '' || 
            amenity.value === '' || 
            sbring.value === '' || 
            about.value === ''){
            error[1].style.display = "flex"
        } else {
            error[1].style.display = 'none'
            this.props.setExperiencePage(title.value, detail.value, street.value, about.value, amenities, sbrings, 'photo')
        }

    }

    render() {
        return (
            <div className="col-md-12 experience-wrapper">
                <div className="col-md-12 experience-container">
                    <div className="description-wrapper">
                        <div className="title"><h1>Description</h1></div>
                        <div className="input-wrapper">
                            <div className="desc">
                                <div>Experience Title</div>
                                <input type="text" name="title" id="title"/>
                            </div>
                            <div className="desc">
                                <div>About You</div>
                                <textarea name="about" id="about" cols={30} rows={10}></textarea>
                            </div>
                            <div className="desc">
                                <div>What we'll do</div>
                                <textarea name="detail" id="detail" cols={30} rows={10}></textarea>
                            </div>
                            <div className="desc">
                                <div>Street</div>
                                <textarea name="street" id="street" cols={30} rows={5}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="facility-wrapper">
                        <div className="title"><h1>What we'll provide</h1></div>
                        <div className="input-wrapper">
                            <textarea name="amenities" id="amenities" cols={30} rows={10}></textarea>
                            <div className="note">
                                *Note : Put comma "," after each item. (Example : Foods, drinks)
                            </div>
                        </div>
                        <div className="title"><h1>What you should bring</h1></div>
                        <div className="input-wrapper">
                            <textarea name="sbring" id="sbring" cols={30} rows={10}></textarea>
                            <div className="note">
                                *Note : Put comma "," after each item. (Example : Hat, Umbrella)
                            </div>
                        </div>
                    </div>
                    <div className="btn-next">
                        <div className="btn" onClick={this.test}>Next</div>
                        <div className="error">Wrong input !</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperiencePage
