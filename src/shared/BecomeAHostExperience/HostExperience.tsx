import React, { Component } from 'react'
import './HostExperience.scss'
import 'react-fa-icon'
import HeaderBecomeA from './HeaderBecomeA/HeaderBecomeA'
import Display from './Display/Display'
import BasicInfo from './BasicInfo/BasicInfo';
import ExperiencePage from './ExperiencePage/ExperiencePage';

export class HostExperience extends Component {

    state = {
        data:{
            experience_category: '',
            experience_title: '',
            experience_detail: '',
            about_host: '',
            estimated_total_hours: '',
            price: 0,
            rating_star: 0,
            total_rating_count: 0,
            amenities: [],
            should_bring: [],
            host: {
                host_id: '',
                host_name: '',
                host_location: '',
                host_response_time: '',
                host_about: '',
                host_thumbnail_url: '',
                host_response_rate: '',
                host_join_date: '',
                total_host_review: '',
                host_language: ''
            },
            address: {
                Street: '',
                suburb: '',
                country: '',
                location: {
                    type: '',
                    coordinates: []
                }
            },
            Images: [],
            reviews: []
        },
        spoken_language:''
    }

    expandBasic(){

    }

    expandExperiencePage(idx:number){
        let subMenu = document.getElementsByClassName("sub-text") as HTMLCollectionOf<HTMLElement>
        if(subMenu[idx].style.display === "block"){
            subMenu[idx].style.animation = "slideBackSet 1s"
            setTimeout(()=>{subMenu[idx].style.display="none"}, 600)
        }
        else{
            subMenu[idx].style.display = "block"
            subMenu[idx].style.animation = "slideDownSet 1s"
        }
    }

    expandSetting(idx:number){
        let subMenu = document.getElementsByClassName("sub-text") as HTMLCollectionOf<HTMLElement>
        if(subMenu[idx].style.display === "block"){
            subMenu[idx].style.animation = "slideBackSet 1s"
            setTimeout(()=>{subMenu[idx].style.display="none"}, 600)
        }
        else{
            subMenu[idx].style.display = "block"
            subMenu[idx].style.animation = "slideDownSet 1s"
        }
    }

    showDetail(){
        console.log("Detail")
    }

    meetLoc(){
        console.log("Loc")
    }

    showDesc(){
        console.log("Desc")
    }

    showFacility(){
        console.log("Lang")
    }

    showPhotos(){
        console.log("Photos")
    }

    basicInformation(){
        console.log(this.props.children)
    }

    getBasicInfo = (location:string, hostLang:string, hostSpokenLang:string, category:string, nextClass:string) => {
        console.log(location + ", " + hostLang + ", " + hostSpokenLang + ", " + category + "" + nextClass);
        this.setState({
            data: {
                experience_category:category,
                host:{
                    host_language:hostLang
                },
                address:{
                    suburb:location,
                }
            },
            spoken_language:hostSpokenLang,
        })
        this.checkClass(nextClass);
    }

    checkClass(currClass:string){
        let basic = document.getElementsByClassName('basic-info-wrapper') as HTMLCollectionOf<HTMLElement>
        if(currClass === ''){
            basic[0].style.display = 'flex'
        }
        else if(currClass === 'experience'){
            console.log("experience")
        }
    }

    render() {

        const {data, spoken_language} = this.state

        var currCity = ''
        var spokenLang = ''

        if(data.address.suburb !== '') currCity = data.address.suburb
        if(spoken_language !== '') spokenLang = spoken_language

        return (
            <div className="col-md-12 host-experience-wrapper">
                <div className="col-md-12 host-experience-container">
                    <HeaderBecomeA currState={"Experience"}/>
                    <div className="col-md-12 input-tab-wrapper">
                        <div className="tab-experience-wrapper">
                            <div className="tab-container">
                                <div className="text-wrapper experience-page">
                                    <div className="text basic-information" onClick={() => this.expandBasic}>
                                        Basic Information
                                    </div>
                                </div>
                                <div className="text-wrapper experience-page">
                                    <div className="show-sub-text" onClick={() => this.expandExperiencePage(0)}>
                                        Experience Page
                                    </div>
                                    <div className="sub-text experience">
                                        <div className="text-inside about" onClick={this.showDesc}>• Description & Facility</div>
                                        <div className="text-inside photos" onClick={this.showPhotos}>• Photos</div>
                                    </div>
                                </div>
                                <div className="text-wrapper experience-page">
                                    <div className="show-sub-text" onClick={() => this.expandSetting(1)}>
                                       Settings
                                    </div>
                                    <div className="sub-text setting">
                                        <div className="text-inside detail" onClick={this.showDetail}>• Detail Informations</div>
                                        <div className="text-inside meeting" onClick={this.meetLoc}>• Meeting Location</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="input-experience-wrapper">
                            <ExperiencePage />
                            <BasicInfo currClass={'basic'} location={''} primaryLang={''} spokenLang={''} category={''} setBasicInfo={this.getBasicInfo} />
                        </div>
                        <div className="display-experience-tab">
                            <Display hostCity={currCity} hostSpoken={spokenLang} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default HostExperience
