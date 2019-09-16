import React, { Component } from 'react'
import './BecomeAHostPlace.scss'
import HeaderBecomeA from '../BecomeAHostExperience/HeaderBecomeA/HeaderBecomeA';
import BasicInfoPlace from './BasicInfo/BasicInfoPlace';
import GuestPlace from './GuestPlace/GuestPlace';
import ScenePlace from './ScenePlace/ScenePlace';

export class BecomeAHostPlace extends Component {

    showBasic(){
        var tab = document.getElementsByClassName('tab') as HTMLCollectionOf<HTMLElement>
        var scene = document.getElementsByClassName('scene-wrapper') as HTMLCollectionOf<HTMLElement>
        var basic = document.getElementsByClassName('basic-info-place-wrapper') as HTMLCollectionOf<HTMLElement>
        var guests = document.getElementsByClassName('guests-wrapper') as HTMLCollectionOf<HTMLElement>
        
        tab[0].style.borderBottom = "4px solid $basic-color"
        tab[0].style.marginBottom = "-4px"    
        basic[0].style.display = 'block';
        scene[0].style.display = 'none';
        guests[0].style.display = 'none';
    }

    showScene(){
        var tab = document.getElementsByClassName('tab') as HTMLCollectionOf<HTMLElement>
        var scene = document.getElementsByClassName('scene-wrapper') as HTMLCollectionOf<HTMLElement>
        var basic = document.getElementsByClassName('basic-info-place-wrapper') as HTMLCollectionOf<HTMLElement>
        var guests = document.getElementsByClassName('guests-wrapper') as HTMLCollectionOf<HTMLElement>
        
        tab[1].style.borderBottom = "4px solid $basic-color"
        tab[1].style.marginBottom = "-4px"   
        basic[0].style.display = 'none'
        scene[0].style.display = 'block';
        guests[0].style.display = 'none';
    }

    showGuests(){
        var tab = document.getElementsByClassName('tab') as HTMLCollectionOf<HTMLElement>
        var scene = document.getElementsByClassName('scene-wrapper') as HTMLCollectionOf<HTMLElement>
        var basic = document.getElementsByClassName('basic-info-place-wrapper') as HTMLCollectionOf<HTMLElement>
        var guests = document.getElementsByClassName('guests-wrapper') as HTMLCollectionOf<HTMLElement>
        
        tab[2].style.borderBottom = "4px solid $basic-color"
        tab[2].style.marginBottom = "-4px"  
        basic[0].style.display = 'none'  
        scene[0].style.display = 'none';
        guests[0].style.display = 'block'; 
    }

    render() {
        return (
            <div className='col-md-12 place-wrapper'>
                <HeaderBecomeA currState={'Place'} />
                <div className="col-md-12 place-tabs">
                    <div className="tab" onClick={()=>this.showBasic()}>Basic</div>
                    <div className="tab" onClick={()=>this.showScene()}>Scene</div>
                    <div className="tab" onClick={()=>this.showGuests()}>Guests</div>
                </div>
                <div className="col-md-12 place-container">
                    <BasicInfoPlace />
                    <ScenePlace />
                    <GuestPlace />
                </div>
            </div>
        )
    }
}

export default BecomeAHostPlace
