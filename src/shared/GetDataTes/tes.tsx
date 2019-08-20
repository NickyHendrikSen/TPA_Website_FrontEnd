import React from "react"
import axios from 'axios'
export default class Tes extends React.Component{
    state = {
        Id:[]
    }
    componentWillMount(){
        axios.get('http://backendtpaweb.herokuapp.com/api/experience')
            .then(res => {
                console.log(res.data);
                this.setState(
                    {
                        Id:res.data.Images
                    }
                )
            }
        )
    }
    render(){
        return(
            <div>
               {this.state.Id.map(i=>i)}
            </div>
        )
    }

}