import React from "react"
import axios from 'axios'
export default class Tes extends React.Component{
    state = {
        data:[{experience_category:''}]
    }
    componentWillMount(){
        axios.get('http://backendtpaweb.herokuapp.com/api/experience')
            .then(res => {
                console.log(res.data);
                this.setState(
                    {
                        data: res.data

                    }
                )
                console.log(this.state)
            }
        )
    }
    render(){
        return(
            <div>
               {this.state.data.map(data => {
                   return (<div> {data.experience_category}</div>)
               })}
            </div>
        )
    }

}