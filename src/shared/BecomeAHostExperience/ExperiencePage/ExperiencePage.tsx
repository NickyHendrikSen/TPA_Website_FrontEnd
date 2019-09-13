import React, { Component } from 'react'
import "./ExperiencePage.scss"

interface IProps{
    title:string,
    about:string,
    detail:string,
    street:string,
    amenities:string[],
    should_bring:string[],
}

export class ExperiencePage extends Component {
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
                        <div className="btn">Next</div>
                        <div className="error">Wrong input !</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExperiencePage
