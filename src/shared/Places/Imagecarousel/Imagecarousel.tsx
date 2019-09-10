import React, { Component } from 'react'
import "./Imagecarousel.scss"

interface IProps{
    image_list:string[]
    index:number
}

export class Imagecarousel extends Component<IProps> {

    state={
        image_list:this.props.image_list,
        index:this.props.index,
        currIdx:1,
    }

    slideRight(image_list:any[], index:number){
        var photo = document.getElementsByClassName("photo") as HTMLCollectionOf<HTMLElement>
        console.log(this.state.currIdx)
        photo[index-1].style.backgroundImage = `url(${image_list[this.state.currIdx]})`
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
        photo[index-1].style.backgroundImage = `url(${image_list[this.state.currIdx]})`
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

    render() {

        const{image_list, index} = this.state

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
