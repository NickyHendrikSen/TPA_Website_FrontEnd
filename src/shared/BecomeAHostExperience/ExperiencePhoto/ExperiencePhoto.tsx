import React, { Component } from 'react'
import AvatarEditor from 'react-avatar-editor'
import FileBase64 from 'react-filebase64'
import './ExperiencePhoto.scss'

interface IProps{
    image_list:string[],
    setImageList:any,
    setImagePreview:any,
}

export class ExperiencePhoto extends Component<IProps> {
    state = {
        image_list:this.props.image_list,
        currImage:'',
        files:[{
            base64:'',
            name:'',
            size:'',
            type:'',
        }],
        brightness:100,
        contrast:100,
        zoom:1,
        deg:0,
        currViewImage:''
    }
    
    setRef = React.createRef<AvatarEditor>()
    
    test = () => {
        var images = ['']

        if(this.state.image_list.length > 0) images = this.state.image_list

        var file = document.getElementById('image') as any
        var editorContainer = document.getElementsByClassName('editor-wrapper') as HTMLCollectionOf<HTMLElement>

        let path = file.value.split('\\').pop() || ''
        let truePath = '../Photos/'+path
        console.log(truePath)

        editorContainer[0].style.display = 'block'

        if(images[0] === '')
            images[0] = path
        else
            images.push(path)

        this.setState({
            image_list:images,
            currImage:file.value
        })
    }

    getFiles(files:File){
        var images = ['']

        if(this.state.image_list.length > 0) images = this.state.image_list

        var editorContainer = document.getElementsByClassName('editor-wrapper') as HTMLCollectionOf<HTMLElement>

        editorContainer[0].style.display = 'block'
        
        this.setState({ 
            files: files,
        })

        if(images[0] === '')
            images[0] = this.state.files[0].base64
        else
            images.push(this.state.files[0].base64)

        this.setState({
            image_list:images,
            currImage:this.state.files[0].base64
        })
    }

    updateBrightness = () => {
        let brightness = document.getElementById('editor brightness') as HTMLInputElement
        var editor = this.setRef.current as AvatarEditor

        this.setState({
            brightness:brightness.value
        })
        console.log(this.state.brightness)
        let cv = editor.getImage() as HTMLCanvasElement
        let ctx = cv.getContext('2d') as CanvasRenderingContext2D
        ctx.filter = `brightness : (${this.state.brightness}%)`

        this.setState({
            currImage: cv.toDataURL()
        })
    }

    updateContrast = () => {
        let contrast = document.getElementById('editor contrast') as HTMLInputElement
        var editor = this.setRef.current as AvatarEditor

        this.setState({
            contrast:contrast.value
        })

        let cv = editor.getImage() as HTMLCanvasElement
        let ctx = cv.getContext('2d') as CanvasRenderingContext2D
        ctx.filter = `contrast : (${this.state.contrast}%)`

        this.setState({
            currImage: cv.toDataURL()
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

    setImage = () => {
        var editor = this.setRef.current as AvatarEditor
        this.props.setImagePreview(editor.getImageScaledToCanvas().toDataURL())
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
                        {/* <input type="file" name="" id="image" onChange={this.test}/> */}
                        <FileBase64 multiple={ true }
                            onDone={ this.getFiles.bind(this) } 
                            />
                        <label htmlFor="image">Choose an Image</label>
                    </div>
                    <div className="url-wrapper">
                        <div className="photo-container">
                            <AvatarEditor
                                ref={this.setRef}
                                image={this.state.currImage}
                                width={160}
                                height={240}
                                border={30}
                                color={[180, 180, 180, 0.5]}
                                scale={Number(this.state.zoom)}
                                rotate={this.state.deg}
                            />
                        </div>
                        <div className="url-container">
                            {listAllImages}
                        </div>
                    </div>
                    <div className="editor-wrapper">
                        <div className="col-md-2 brightness">
                            Brightness
                            <input type="range" min={0} max={200} name="" id="editor brightness" onChange={this.updateBrightness}/>
                        </div>
                        <div className="col-md-2 contrast">
                            Contrast
                            <input type="range" min={0} max={200} name="" id="editor contrast" onChange={this.updateContrast}/>
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
