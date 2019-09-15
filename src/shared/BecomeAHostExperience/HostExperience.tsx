import React, { Component } from 'react'
import './HostExperience.scss'
import 'react-fa-icon'
import HeaderBecomeA from './HeaderBecomeA/HeaderBecomeA'
import Display from './Display/Display'
import BasicInfo from './BasicInfo/BasicInfo';
import ExperiencePage from './ExperiencePage/ExperiencePage';
import './utils.scss'
import ExperiencePhoto from './ExperiencePhoto/ExperiencePhoto'
import DetailInformation from './DetailInformation/DetailInformation'
import MeetingLocation from './MeetingLocation/MeetingLocation'
import Finish from './Finish/Finish'
import Axios from 'axios'

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

    expandExperiencePage(){
        let subMenu = document.getElementsByClassName("sub-text") as HTMLCollectionOf<HTMLElement>
        subMenu[0].style.display = "block"
        subMenu[0].style.animation = "slideDownSet 1s"
    }

    expandSetting(){
        let subMenu = document.getElementsByClassName("sub-text") as HTMLCollectionOf<HTMLElement>
        subMenu[1].style.display = "block"
        subMenu[1].style.animation = "slideDownSet 1s"
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

    getExperiencePage = (title:string, detail:string, street:string, about:string, amenities:string[], sbring:string[], nextClass:string) => {
        this.setState({
            data:{
                experience_title:title,
                experience_detail:detail,
                about_host:about,
                address:{
                    Street:street
                },
                amenities:amenities,
                should_bring:sbring,
            }
        })
        this.checkClass(nextClass);
    }

    getImageList = (image_list:string[], nextClass:string) => {
        this.checkClass(nextClass)
    }

    getDetailInfo = (person:string, price:string, estimatedHours:string, nextClass:string) => {
        this.setState({
            data:{
                price:price,
                estimated_total_hours:estimatedHours,
            }
        })
        this.checkClass(nextClass)
    }

    getMeetingLocation = (position:number[], country:string, address:string, city:string, nextClass:string) => {
        this.setState({
            data:{
                address: {
                    Street: address,
                    suburb: city,
                    country: country,
                    location: {
                        type: 'Point',
                        coordinates: position
                    }
                }
            }
        })
        this.checkClass(nextClass)
    }

    doPush = () =>{
        console.log(this.state.data)
    }

    checkClass(currClass:string){
        let check = document.getElementsByClassName('check') as HTMLCollectionOf<HTMLElement>
        let basic = document.getElementsByClassName('basic-info-wrapper') as HTMLCollectionOf<HTMLElement>
        let experience = document.getElementsByClassName('experience-wrapper') as HTMLCollectionOf<HTMLElement>
        let experiencePhoto = document.getElementsByClassName('experience-photo-wrapper') as HTMLCollectionOf<HTMLElement>
        let detailInformation = document.getElementsByClassName('detail-information-wrapper') as HTMLCollectionOf<HTMLElement> 
        let meeting = document.getElementsByClassName('meeting-wrapper') as HTMLCollectionOf<HTMLElement> 
        let finish = document.getElementsByClassName('finish-wrapper') as HTMLCollectionOf<HTMLElement> 

        if(currClass === ''){
            basic[0].style.display = 'flex'
        }
        else if(currClass === 'experience'){
            basic[0].style.display = 'none'
            check[0].style.display = 'block'
            experience[0].style.display = 'block'
            this.expandExperiencePage()
        }
        else if(currClass === 'photo'){
            experience[0].style.display = 'none'
            check[1].style.display = 'block'
            experiencePhoto[0].style.display = 'block'
        }
        else if(currClass === 'detail'){
            experiencePhoto[0].style.display = 'none'
            check[2].style.display = 'block'
            detailInformation[0].style.display = 'block'
            this.expandSetting()
        }
        else if(currClass === 'meeting'){
            detailInformation[0].style.display = 'none'
            check[3].style.display = 'block'
            meeting[0].style.display = 'block'
        }
        else if(currClass === 'finish'){
            check[4].style.display = 'block'
            meeting[0].style.display = 'none'
            finish[0].style.display = 'block'
        }
    }

    componentDidMount(){
        Axios.get('https://backendtpaweb.herokuapp.com/api/users/512')
            .then(res => (
                this.setState({
                    data:{
                        host:res.data
                    }
                })
            ))
    }

    getSafe = (val:string, defaultVal:string) => {
        try{
            return val
        } catch(e) {
            return defaultVal
        }
    }

    render() {

        const {data, spoken_language} = this.state

        var currCity = ''
        var spokenLang = ''

        try{
            currCity = data.address.suburb
        } catch(e) {
            currCity = ''
        }

        return (
            <div className="col-md-12 host-experience-wrapper">
                <div className="col-md-12 host-experience-container">
                    <HeaderBecomeA currState={"Experience"}/>
                    <div className="col-md-12 input-tab-wrapper">
                        <div className="tab-experience-wrapper">
                            <div className="tab-container">
                                <div className="text-wrapper experience-page">
                                    <div className="text basic-information">
                                        Basic Information <i className="check far fa-check-circle"></i>
                                    </div>
                                </div>
                                <div className="text-wrapper experience-page">
                                    <div className="show-sub-text">
                                        Experience Page
                                    </div>
                                    <div className="sub-text experience">
                                        <div className="text-inside about">• Description & Facility <i className="check far fa-check-circle"></i></div>
                                        <div className="text-inside photos">• Photos <i className="check far fa-check-circle"></i></div>
                                    </div>
                                </div>
                                <div className="text-wrapper experience-page">
                                    <div className="show-sub-text">
                                       Settings
                                    </div>
                                    <div className="sub-text setting">
                                        <div className="text-inside detail">• Detail Informations <i className="check far fa-check-circle"></i></div>
                                        <div className="text-inside meeting">• Meeting Location <i className="check far fa-check-circle"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="input-experience-wrapper">
                            <BasicInfo setBasicInfo={this.getBasicInfo} />
                            <ExperiencePage setExperiencePage={this.getExperiencePage}/>
                            <ExperiencePhoto image_list={data.Images} setImageList={this.getImageList} />
                            <DetailInformation setDetailInfo={this.getDetailInfo}/>
                            <MeetingLocation setMeetingLocation={this.getMeetingLocation}/>
                            <Finish doPush={this.doPush}/>
                        </div>
                        <div className="display-experience-tab">
                            <Display hostCity={currCity} hostSpoken={spoken_language||''} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default HostExperience
