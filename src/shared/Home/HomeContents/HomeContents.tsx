import React, { Component } from 'react'
import "./HomeContents.scss"
import "./GridSystem/GridSystems.scss"
import SmallCards from './Cards/SmallCards/SmallCards';
import MediumCards from './Cards/MediumCards/MediumCards';
import BigCards from './Cards/Bigcards/BigCards';

export class HomeContents extends Component {
    render() {
        return (
            <div className="grid-wrapper">
                <MediumCards/>
            </div>
        )
    }
}

export default HomeContents
