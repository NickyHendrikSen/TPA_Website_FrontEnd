import React, { Component } from 'react'
import './Finish.scss'
import '../utils.scss'

interface IProps{
    doPush:any
}

export class finish extends Component<IProps> {
    
    push = () => {
        this.props.doPush();
    }

    render() {
        return (
            <div className='col-md-12 finish-wrapper'>
                <div className="col-md-12 button-container">
                    <div className="icon far fa-handshake fa-8x"></div>
                    <div className='btn-next'>
                        <div className='btn' onClick={this.push}>Finish</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default finish
