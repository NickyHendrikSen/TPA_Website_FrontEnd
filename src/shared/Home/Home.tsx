import React from "react";
import "./Home.scss"
import Footer from "../Footer/Footer"
import FooterButton from "../Footer/FooterButton/FooterButton";

export default class Home extends React.Component{
    render()
    {
        return(
            <div className="wrapper">
                <div className="header-contents">
                    <div className="description">
                        Introducing Aivbnb.com
                    </div>
                </div>
                <div className="bottom-contents">
                    <div className="grid-wrapper">
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
                        <div className="recommendation-slider">
                            <div className="recommendation-grid">
                                <h1 className="recommendation-title"><b>Recommendation for you</b></h1>
                                <div className="col-md-2 medium-card"><div className="medium-card-slide"></div></div>
                                <div className="col-md-2 medium-card"><div className="medium-card-slide"></div></div>
                                <div className="col-md-2 medium-card"><div className="medium-card-slide"></div></div>
                                <div className="col-md-2 medium-card"><div className="medium-card-slide"></div></div>
                                <div className="col-md-2 medium-card"><div className="medium-card-slide"></div></div> 
                            </div>
                            {/* <div className="col-slider-3 medium-card"><div className="medium-card-slide"></div></div>  */}
                            <div className="slider-control">
                                <div className="slider-controller-backward">
                                    <div className="square-slider-backward"><div className="arrow-slider-backward"></div></div>
                                </div>
                                <div className="slider-controller-forward">
                                    <div className="square-slider-forward"><div className="arrow-slider-forward"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <FooterButton />
            </div>
        )
    }
}