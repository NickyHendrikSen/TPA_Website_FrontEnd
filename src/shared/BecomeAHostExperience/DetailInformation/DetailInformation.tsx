import React, { Component } from 'react'
import './DetailInformation.scss'

interface IProps{
    setDetailInfo:any
}

export class DetailInformation extends Component<IProps> {

    test = () => {
        var personCount = document.getElementById("person-count") as HTMLInputElement
        var price = document.getElementById("price") as HTMLInputElement
        var estimatedHours = document.getElementById("estimated-total-hours") as HTMLInputElement
        var error = document.getElementsByClassName("error") as HTMLCollectionOf<HTMLElement>
        console.log("asd")
        if(personCount.value === '' || price.value === '' || estimatedHours.value === ''){
            error[3].style.display = 'block';
        } else {
            error[3].style.display = 'none';
            this.props.setDetailInfo(price, estimatedHours, 'meeting')
        }

    }

    render() {
        return (
            <div className="col-md-12 detail-information-wrapper">
                <div className="title">
                    <h1>Detail Information</h1>
                </div>
                <div className="detail-info-container">
                    <div className="input input-person-count">
                        <div>Max. Person</div>
                        <div>
                            <input type="number" name="person-count" id="person-count"/>
                        </div>
                    </div>
                    <div className="input price">
                        <div>Price</div>
                        <div>
                            <input type="text" name="price" id="price"/>
                            <span>/Person</span> 
                        </div>
                    </div>
                    <div className="input input-estimated-total-hours">
                        <div>Estimated Total Hours</div>
                        <div>
                            <input type="text" name="estimated-total-hours" id="estimated-total-hours"/>
                        </div>
                    </div>
                    <div className="btn-next">
                        <div className="btn" onClick={this.test}>Next</div>
                        <div className="error">Wrong input !</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailInformation
