import React, { Component } from 'react'
import "./Footer.scss"
import FooterContents from './FooterContents/FooterContents';

export default class Footer extends Component {
    render() {
        return (
            <div className="col-md-12 footer-wrapper">
                <FooterContents />
            </div>
        )
    }
}

