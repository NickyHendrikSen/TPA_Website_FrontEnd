import React, { Component } from 'react'
import './GuestPlace.scss'

export class GuestPlace extends Component {
    
    convertToUSD(){

    }

    render() {
        return (
            <div className="guests-wrapper">
                <div className="inputs">
                    <div className="title">
                        <h1>Guests</h1>
                    </div>
                    <div className="sub-title">Guests Rules</div>
                    <div className="input">
                        <div>Max. Guest Allowed</div>
                        <div>
                            <input type="text" name="desc" id="desc"/>
                        </div>
                    </div>
                    <div className="input">
                        <div>Price</div>
                        <div>
                            <input type="Number" name="price" id="price" onChange={this.convertToUSD}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GuestPlace
