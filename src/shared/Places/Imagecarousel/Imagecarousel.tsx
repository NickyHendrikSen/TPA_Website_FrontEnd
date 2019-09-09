import React, { Component } from 'react'
import "./Imagecarousel.scss"
import { imageOverlay } from 'leaflet';
import { number } from 'prop-types';

interface IProps{
    image_list:string[]
    index:number
    lengthOfData:number
}

export class Imagecarousel extends Component<IProps> {
    
    // constructor(props:any){
    //     super(props)
    //     this.state = {
    //         image_list:this.props.image_list,
    //         index:this.props.index,
    //         lengthOfData:this.props.lengthOfData,
    //         currIdx:0,
    //     }
    // }

    state={
        image_list:this.props.image_list,
        index:this.props.index,
        lengthOfData:this.props.lengthOfData,
        currIdx:1,
    }

    slideRight(image_list:any[], index:number){
        var photo = document.getElementsByClassName("photo") as HTMLCollectionOf<HTMLElement>
        console.log(this.state.currIdx)
        photo[index].style.backgroundImage = `url(${image_list[this.state.currIdx]})`
        if(this.state.currIdx === image_list.length-1){
            this.setState({
                currIdx:0
            })
        } else {
            this.setState({
                currIdx:this.state.currIdx+1
            })
        }
    }

    slideLeft(image_list:any[], index:number){
        var photo = document.getElementsByClassName("photo") as HTMLCollectionOf<HTMLElement>
        console.log(this.state.currIdx)
        photo[index].style.backgroundImage = `url(${image_list[this.state.currIdx]})`
        if(this.state.currIdx === 0){
            this.setState({
                currIdx:image_list.length-1
            })
        } else {
            this.setState({
                currIdx:this.state.currIdx-1
            })
        }
    }

    activate(){
        var photo = document.getElementsByClassName("photo") as HTMLCollectionOf<HTMLElement>
        // for(let i = 0; i < photo.length; i++){
        // }
        photo[0].style.display = "block";
    }

    render() {

        const{image_list, index, lengthOfData} = this.state

        const allPhotos = image_list.map((list:any, index:any) => {
            return(
                <div key={index} className="photo" style={{backgroundImage: `url(${list})`}}>
                </div>
            )
        })


        return (
            <div className="frame-photo">
                <div className="arrows">
                    <div className="left" onClick={()=>this.slideLeft(image_list, index)}>
                        <i className="fas fa-chevron-left left-arrow"></i>
                    </div>
                    <div className="right" onClick={()=>this.slideRight(image_list, index)}>
                        <i className="fas fa-chevron-right right-arrow"></i>
                    </div>
                </div>
                <div className="photo-container">
                    <div className="photo" style={{backgroundImage: `url(${image_list[0]})`}}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Imagecarousel
