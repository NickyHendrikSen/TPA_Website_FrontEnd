import React, { Component } from 'react'
import "./BasicInfo.scss"

interface IProps{
    location:string,
    primaryLang:string, 
    spokenLang:string,
    category:string,
    currClass:string,
    setBasicInfo:any
}

export class BasicInfo extends Component <IProps> {

    state={
        location:this.props.location,
        primaryLang:this.props.primaryLang,
        spokenLang:this.props.spokenLang,
        category:this.props.category,
        currClass:this.props.currClass,
    }

    test = () => {
        var location = document.getElementById("location") as HTMLInputElement
        var primary_lang = document.getElementById("primary-lang") as HTMLInputElement
        var spoken_lang = document.getElementById("spoken-lang") as HTMLInputElement
        var category = document.getElementById("category") as HTMLInputElement
        var error = document.getElementsByClassName("error") as HTMLCollectionOf<HTMLElement>

        if(location.value === '' || primary_lang.value === '' || spoken_lang.value === '' || category.value === ''){
            error[0].style.display = 'block';
        } else {
            error[0].style.display = 'none';
            this.props.setBasicInfo(location.value, primary_lang.value, spoken_lang.value, category.value, 'experience')
        }

    }

    render() {

        return (
            <div className="basic-info-wrapper">
                <div className="title">
                    <h1>Basic Information</h1>
                </div>
                <div className="basic-info-container">
                    <div className="input input-location">
                        <div>Location</div>
                        <div>
                            <input type="text" name="location" id="location"/>
                        </div>
                    </div>
                    <div className="input input-primary-lang">
                        <div>Primary Language</div>
                        <div>
                            <input type="text" name="primary-lang" id="primary-lang"/>
                        </div>
                    </div>
                    <div className="input input-spoken-lang">
                        <div>Spoken Language</div>
                        <div>
                            <input type="text" name="spoken-lang" id="spoken-lang"/>
                        </div>
                    </div>
                    <div className="input input-category">
                        <div>Category</div>
                        <div>
                            <input type="text" name="category" id="category"/>
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

export default BasicInfo
