import React, { Component } from 'react'
import "./FooterContents.scss"
import LanguageAndCurrency from '../LanguageAndCurrency/LanguageAndCurrency';
import {BrowserRouter as Router, Link} from "react-router-dom"

export class FooterContents extends Component {
    render() {
        return (
            <div className="footer-contents">
                <ol>
                    <li className="footer-contents-titles">
                        <h4>AirBnb</h4>
                        <li className="footer-contents-list"><a href="https://careers.airbnb.com/">Careers</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Press</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/"> Policies</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/"> Help</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/"> Diversity & Belonging</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/"> Accessibility</a></li>
                    </li>
                    <li className="footer-contents-titles">
                        <h4>Discover</h4>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Trust & Safety</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Invite Friends</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Gift Cards</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Airbnb Citizen</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Business Travel</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Guidebooks</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Airbnbmag</a></li>
                    </li>
                    <li className="footer-contents-titles">
                        <h4>Hosting</h4>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Why Host</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Hospitality</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Responsible Hosting</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Community Center</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Host an Experience</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Open Homes</a></li>
                    </li>
                    <li className="footer-contents-titles">
                        <span className="footer-contents-logo-facebook"></span>
                        <span className="footer-contents-logo-twitter"></span>
                        <span className="footer-contents-logo-instagram"></span>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Terms</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Privacy</a></li>
                        <li className="footer-contents-list"><a href="https://press.airbnb.com/">Site Map</a></li>
                    </li>
                </ol>
                <hr className="footer-separator"/>
                <LanguageAndCurrency />
            </div>
        )
    }
}

export default FooterContents
