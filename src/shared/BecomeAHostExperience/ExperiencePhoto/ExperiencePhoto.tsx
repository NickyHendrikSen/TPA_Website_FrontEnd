import React, { Component } from 'react'
import AvatarEditor from 'react-avatar-editor'
import './ExperiencePhoto.scss'

interface IProps{
    image_list:string[],
    setImageList:any,
}

export class ExperiencePhoto extends Component<IProps> {

    state = {
        image_list:this.props.image_list
    }

    test = () => {
        var images = ['']

        if(this.state.image_list.length > 0) images = this.state.image_list

        var file = document.getElementById('image') as HTMLInputElement
        var photoContainer = document.getElementsByClassName('photo-container') as HTMLCollectionOf<HTMLElement>
        var editorContainer = document.getElementsByClassName('editor-wrapper') as HTMLCollectionOf<HTMLElement>

        let path = file.value.split('\\').pop() || ''
        let truePath = '../Photos/'+path
        console.log(truePath)

        photoContainer[0].style.backgroundImage = "url('https://miro.medium.com/max/832/1*7KXFjTVRNDFsKeJkK2BOFA.png')"
        editorContainer[0].style.display = 'block'

        if(images[0] === '')
            images[0] = path
        else
            images.push(path)

        console.log(images)

        this.setState({
            image_list:images
        })



    }

    render() {

        const {image_list} = this.state

        var listAllImages = 
            <React.Fragment>
                <div className="url">Please upload a photo</div>
            </React.Fragment>

        if(image_list.length >= 1){
            listAllImages = 
                <React.Fragment>
                    {image_list.map((url, index) => {
                        return(
                            <div key={index} className="url"><i className="far fa-check-circle"></i>{url}</div>
                        )
                    })}
                </React.Fragment>
        }
                
        return (
                <div className="col-md-12 experience-photo-wrapper">
                    <div className="file-container">
                        <i className="far fa-save fa-8x"></i>
                        <input type="file" name="" id="image" onChange={this.test}/>
                        <label htmlFor="image">Choose an Image</label>
                    </div>
                    <div className="url-wrapper">
                        <div className="photo-container">
                            <AvatarEditor
                                image="https://miro.medium.com/max/832/1*7KXFjTVRNDFsKeJkK2BOFA.png"
                                width={160}
                                height={240}
                                border={30}
                                color={[180, 180, 180, 0.5]}
                                scale={1.2}
                                rotate={0}
                            />
                        </div>
                        <div className="url-container">
                            {listAllImages}
                        </div>
                    </div>
                    <div className="editor-wrapper">
                        <div className="col-md-2 brightness">
                            Brightness
                            <input type="range" min={0} max={100} name="" id="editor brightness"/>
                        </div>
                        <div className="col-md-2 contrast">
                            Contrast
                            <input type="range" min={0} max={100} name="" id="editor contrast"/>
                        </div>
                        <div className="col-md-2 zoom">
                            Zoom
                            <input type="range" min={0} max={100} name="" id="editor zoom"/>
                        </div>
                        <div className="col-md-2 rotation">
                            Rotate
                            <div className="button-container">
                                <button>Left</button>
                                <button>Right</button>
                            </div>
                        </div>
                        <div className="col-md-2 btn">
                            <div className="btn-implement">
                                <div className="btn">View</div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-next">
                        <div className="btn" onClick={() => this.props.setImageList(this.state.image_list, 'detail')}>Next</div>
                        <div className="error">Wrong input !</div>
                    </div>
                </div>
            )
        }
}

export default ExperiencePhoto
