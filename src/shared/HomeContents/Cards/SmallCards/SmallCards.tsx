import React, { Component } from 'react'
import "./SmallCards.scss"

export class SmallCards extends Component {
    render() {
        return (
            <div className="explore-grid">
                <h1 className="explore-title"><b>Explore Aivbnb</b></h1>
                <div className="col-md-3 xsmall-card">
                    <div className="xsmall-card-content">
                        <div className="xsmall-photo xs-photo xs-p-a"></div>
                        <div className="xsmall-photo-description">
                            <p>Stays</p>
                            <div className="xsmall-photo-description-content">Homes, boutique, hotels & more</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 xsmall-card">
                    <div className="xsmall-card-content">
                        <div className="xsmall-photo xs-photo xs-p-b"></div>
                        <div className="xsmall-photo-description">
                            <p>Experiences</p>
                            <div className="xsmall-photo-description-content">Activities hosted by locals</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 xsmall-card">
                    <div className="xsmall-card-content">
                        <div className="xsmall-photo xs-photo xs-p-c"></div>
                        <div className="xsmall-photo-description">
                            <p>Restaurants</p>
                            <div className="xsmall-photo-description-content">Hosted trip including lodging</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 xsmall-card">
                    <div className="xsmall-card-content">
                        <div className="xsmall-photo xs-photo xs-p-d"></div>
                        <div className="xsmall-photo-description">
                            <p>Adventures</p>
                            <div className="xsmall-photo-description-content">Popular spots to eat & drink</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SmallCards
