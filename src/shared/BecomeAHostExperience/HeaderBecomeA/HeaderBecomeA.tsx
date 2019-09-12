import React, { Component } from 'react'
import './HeaderBecomeA.scss'

interface IProps{
    currState:string
}

export class HeaderBecomeA extends Component<IProps> {

    state = {
        currState:this.props.currState
    }

    render() {
        return (
            <div className="col-md-12 header-host-experience">
                <div className="left"> 
                    <i className="fab fa-houzz fa-2x"></i> 
                    <div className="text">Create Your {this.state.currState}</div> 
                </div>
            </div>
        )
    }
}


export default HeaderBecomeA
