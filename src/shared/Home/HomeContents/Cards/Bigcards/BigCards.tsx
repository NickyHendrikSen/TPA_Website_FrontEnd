import React, { Component } from 'react'
import "./BigCards.scss"

export class BigCards extends Component {
    render() {
        return (
            <div className="luxe-grid">
                <div className="col-md-12 big-card">
                    <div className="big-card-content">
                        <div className="big-card-content big-card-photo">
                            <div className="big-card-content big-card-photo big-card-photo-1">
                                <div className="big-card-description big-card-description-container">
                                    INTRODUCING AIRBNB STAYS
                                    <h1>Hosted journeys to extraordinary places</h1>
                                    lodging, meals, and activities included
                                    <h3>
                                        <a href="">
                                            Learn more >
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BigCards
