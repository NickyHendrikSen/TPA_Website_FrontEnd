import React, { Component } from 'react'
import "./HomeContents.scss"
import "./GridSystem/GridSystems.scss"
import MediumCards from './Cards/MediumCards/MediumCards';
import SmallCards from './Cards/SmallCards/SmallCards';

export class HomeContents extends Component {
    render() {
        return (
            <div className="grid-wrapper">
                <div>
                    <div>
                        <MediumCards/>
                    </div>
                    <div>
                        <SmallCards/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeContents
