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
        
        tab[0].style.borderBottom = "4px solid #008489"
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
        
        tab[1].style.borderBottom = "4px solid #008489"
        tab[1].style.marginBottom = "-4px"   
        basic[0].style.display = 'none'
        scene[0].style.display = 'block';
        guests[0].style.display = 'none';
    }

    showGuests(){
        var tab = document.getElementsByClassName('tab') as HTMLCollectionOf<HTMLElement>
        var placeTab = document.getElementsByClassName('place-tabs') as HTMLCollectionOf<HTMLElement>
        var scene = document.getElementsByClassName('scene-wrapper') as HTMLCollectionOf<HTMLElement>
        var basic = document.getElementsByClassName('basic-info-place-wrapper') as HTMLCollectionOf<HTMLElement>
        var guests = document.getElementsByClassName('guests-wrapper') as HTMLCollectionOf<HTMLElement>
        
        tab[2].style.borderBottom = "4px solid #008489"
        tab[2].style.marginBottom = "-4px"  
        placeTab[0].style.borderBottom = "4px solid #008489"
        placeTab[0].style.marginBottom = "-4px"  
        basic[0].style.display = 'none'  
        scene[0].style.display = 'none';
        guests[0].style.display = 'block'; 
    }

    showFinish(){

    }

    getCurrStatus = (currClass:string) => {
        if(currClass === 'scene'){
            this.showScene()
        }
        else if(currClass === 'guests'){
            this.showGuests()
        }
    }

    render() {
        return (
            <div className='col-md-12 place-wrapper'>
                <HeaderBecomeA currState={'Place'} />
                <div className="col-md-12 place-tabs">
                    <div className="tab">Basic</div>
                    <div className="tab">Scene</div>
                    <div className="tab">Guests</div>
                </div>
                <div className="col-md-12 place-container">
                    <BasicInfoPlace setCurrClass={this.getCurrStatus}/>
                    <ScenePlace setCurrClass={this.getCurrStatus}/>
                    <GuestPlace setCurrClass={this.getCurrStatus}/>
                </div>
            </div>
        )
    }
}

export default BecomeAHostPlace
