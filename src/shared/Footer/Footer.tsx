import React, { Component } from 'react'
import "./Footer.scss"
import FooterContents from './FooterContents/FooterContents';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <FooterContents />
            </div>
        )
    }
}

