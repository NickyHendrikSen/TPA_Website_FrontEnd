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
                        <li className="footer-contents-list"><a href="https://www.airbnb.co.id/help/topic/250"> Policies</a></li>
                        <li className="footer-contents-list"><a href=""> Help</a></li>
                        <li className="footer-contents-list"><a href=""> Diversity & Belonging</a></li>
                        <li className="footer-contents-list"><a href=""> Accessibility</a></li>
                    </li>
                    <li className="footer-contents-titles">
                        <h4>Discover</h4>
                        <li className="footer-contents-list"><a href="">Trust & Safety</a></li>
                        <li className="footer-contents-list"><a href="">Invite Friends</a></li>
                        <li className="footer-contents-list"><a href="">Gift Cards</a></li>
                        <li className="footer-contents-list"><a href="">Airbnb Citizen</a></li>
                        <li className="footer-contents-list"><a href="">Business Travel</a></li>
                        <li className="footer-contents-list"><a href="">Guidebooks</a></li>
                        <li className="footer-contents-list"><a href="">Airbnbmag</a></li>
                    </li>
                    <li className="footer-contents-titles">
                        <h4>Hosting</h4>
                        <li className="footer-contents-list"><a href="">Why Host</a></li>
                        <li className="footer-contents-list"><a href="">Hospitality</a></li>
                        <li className="footer-contents-list"><a href="">Responsible Hosting</a></li>
                        <li className="footer-contents-list"><a href="">Community Center</a></li>
                        <li className="footer-contents-list"><a href="">Host an Experience</a></li>
                        <li className="footer-contents-list"><a href="">Open Homes</a></li>
                    </li>
                    <li className="footer-contents-titles">
                        <span className="footer-contents-logo-facebook"></span>
                        <span className="footer-contents-logo-twitter"></span>
                        <span className="footer-contents-logo-instagram"></span>
                        <li className="footer-contents-list"><a href="">Terms</a></li>
                        <li className="footer-contents-list"><a href="">Privacy</a></li>
                        <li className="footer-contents-list"><a href="">Site Map</a></li>
                    </li>
                </ol>
                <hr className="footer-separator"/>
                <LanguageAndCurrency />
            </div>
        )
    }
}

export default FooterContents
