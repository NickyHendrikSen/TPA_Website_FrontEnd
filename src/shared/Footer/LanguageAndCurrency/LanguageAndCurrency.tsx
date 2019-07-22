import React, { Component } from 'react'
import "./LanguageAndCurrency.scss" 
import CurrencyData from './CurrencyData/CurrencyData';


export class LanguageAndCurrency extends Component {
    render() {
        return (
            <div>
                <div className="footer-contents-copyrights">
                    <span className="left">
                        <span className="footer-icon"></span> 
                        © 2019 Airbnb, Inc. All right reserved.
                    </span>
                    <span className="right">
                        <div className="language-button">Language</div>
                        <div className="exchange-currency-button">
                            <CurrencyData />
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}

export default LanguageAndCurrency
