import React, { Component, InputHTMLAttributes } from 'react'
import AvatarEditor from 'react-avatar-editor'
import './ExperiencePhoto.scss'

interface IProps{
    image_list:string[],
    setImageList:any,
    setImagePreview:any,
}

export class ExperiencePhoto extends Component<IProps> {
    state = {
        image_list:this.props.image_list,
        image_list_name:[],
        currImage:'',
        currImageName:'',
        files:[{
            base64:'',
            file:{},
            name:'',
            size:'',
            type:'',
        }],
        brightness:100,
        contrast:100,
        zoom:1,
        deg:0,
        currViewImage:'',
        index:0,
        style: {
            filter: ""
        }
    }
    
    setRef = React.createRef<AvatarEditor>()

    updateBrightness = () => {
        let brightness = document.getElementById('brightness') as HTMLInputElement
        this.setState({
            brightness:brightness.value
        })

        this.setState({
            style: {
                filter: `brightness(${this.state.brightness}%) contrast(${this.state.contrast}%)`
            }
        })
    }

    updateContrast = () => {
        let contrast = document.getElementById('contrast') as HTMLInputElement
        this.setState({
            contrast:contrast.value
        })

        this.setState({
            style: {
                filter: `brightness(${this.state.brightness}%) contrast(${this.state.contrast}%)`
            }
        })
    }

    zoom = () => {
        let zoom = document.getElementById('editor zoom') as HTMLInputElement

        this.setState({
            zoom:zoom.value
        })
    }

    rotate(dir:string){
        if(dir === 'right'){
            this.setState({
                deg:this.state.deg + 90
            })
        }
        else if(dir === 'left'){
            this.setState({
                deg:this.state.deg - 90
            })
        }
    }

    setFiles = (e:any) => {
        let reader = new FileReader()
        let images = [] as any
        reader.onload = () => {
            if(this.state.image_list.length === 0) images[0] = reader.result
            else images.push(reader.result)
            this.setState({
                currImage:reader.result,
                image_list:images
            })
        }
        reader.readAsDataURL(e.target.files[0])
    }

    setImage = () => {
        var editor = this.setRef.current as AvatarEditor
        var editorCanvas = editor.getImageScaledToCanvas()
        var canvas = document.createElement('canvas') as HTMLCanvasElement
        var ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        canvas.setAttribute("width", editorCanvas.width + "")
        canvas.setAttribute("height", editorCanvas.height + "")

        ctx.filter = this.state.style.filter
        ctx.drawImage(editorCanvas, 0, 0, editorCanvas.width, editorCanvas.height)

        this.props.setImagePreview(canvas.toDataURL())
    }

    render() {

        const {image_list_name} = this.state

        var listAllImages = 
            <React.Fragment>
                <div className="url">Please upload a photo</div>
            </React.Fragment>

        if(image_list_name.length >= 0){
            listAllImages = 
                <React.Fragment>
                    {image_list_name.map((url, index) => {
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
                        <input type="file" name="image" id="image" onChange={this.setFiles.bind(this)}/>
                        <label htmlFor="image">Choose an Image</label>
                    </div>
                    <div className="url-wrapper">
                        <div className="photo-container">
                            <AvatarEditor
                                className="edit-image"
                                ref={this.setRef}
                                image={this.state.currImage}
                                width={160}
                                height={240}
                                border={30}
                                color={[180, 180, 180, 0.5]}
                                style={this.state.style}
                                scale={Number(this.state.zoom)}
                                rotate={this.state.deg}
                            />
                        </div>
                        <div className="editor-wrapper">
                            <div className="col-md-2 brightness">
                                Brightness
                                <input type="range" min={0} max={200} name="" id="brightness" onChange={this.updateBrightness}/>
                            </div>
                            <div className="col-md-2 contrast">
                                Contrast
                                <input type="range" min={0} max={200} name="" id="contrast" onChange={this.updateContrast}/>
                            </div>
                            <div className="col-md-2 zoom">
                                Zoom
                                <input type="range" min={1} max={5} name="" id="editor zoom" onChange={this.zoom}/>
                            </div>
                            <div className="col-md-2 rotation">
                                Rotate
                                <div className="button-container">
                                    <button onClick={()=>this.rotate('left')}>Left</button>
                                    <button onClick={()=>this.rotate('right')}>Right</button>
                                </div>
                            </div>
                            <div className="col-md-2 btn">
                                <div className="btn-implement">
                                    <div className="btn" onClick={this.setImage}>Preview</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="url-container">
                        {listAllImages}
                    </div>
                    <div className="input">
                        <div className="btn-next">
                            <div className="btn" onClick={() => this.props.setImageList(this.state.image_list, 'detail')}>Next</div>
                            <div className="error">Wrong input !</div>
                        </div>
                    </div>
                </div>
            )
        }
}

export default ExperiencePhoto
