import React, { Component } from 'react'
import "./MediumCards.scss"

export class MediumCards extends Component {
    render() {
        return (
            <div className="recommendation-slider">
                <div className="recommendation-grid">
                    <h1 className="recommendation-title"><b>Recommendation for you</b></h1>
                    <div className="col-slider-2 medium-card"><div className="medium-card-slide medium-card-slide-photo1"></div></div>
                    <div className="col-slider-2 medium-card"><div className="medium-card-slide medium-card-slide-photo2"></div></div>
                    <div className="col-slider-2 medium-card"><div className="medium-card-slide medium-card-slide-photo3"></div></div>
                    <div className="col-slider-2 medium-card"><div className="medium-card-slide medium-card-slide-photo4"></div></div>
                    <div className="col-slider-2 medium-card"><div className="medium-card-slide medium-card-slide-photo5"></div></div> 
                </div>
                <div className="slider-control">
                    <div className="slider-controller-backward">
                        <div className="square-slider-backward"><div className="arrow-slider-backward"></div></div>
                    </div>
                    <div className="slider-controller-forward">
                        <div className="square-slider-forward"><div className="arrow-slider-forward"></div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediumCards
