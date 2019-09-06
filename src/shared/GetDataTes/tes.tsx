import React from "react"
import axios from 'axios'
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/scss/image-gallery.scss";
export default class Tes extends React.Component{
    state = {
        data:[{experience_category:''}]
    }
    images = [{}
      ];
    componentWillMount(){
        axios.get('http://backendtpaweb.herokuapp.com/api/experience/' + 2)
            .then(res => {
                for(var i = 0; i < res.data.Images.length; i++){
                    let obj = {
                        thumbnail: res.data.Images[i],
                        original: res.data.Images[i]
                    }
        
                    this.images.push(obj)
                }
            }
        )
    }
    render(){
        return(
            <div>
                <ImageGallery items={this.images} />
            </div>
        )
    }

}