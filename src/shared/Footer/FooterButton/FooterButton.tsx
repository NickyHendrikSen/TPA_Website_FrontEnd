import React, { Component } from 'react'
import "./FooterButton.scss"

export default class FooterButton extends Component {
    render() {
        return (
            <div>
                <button className="footer-button">
                    Ketentuan, Privasi, Mata Uang & Lainnnya
                </button>
            </div>
        )
    }
}

