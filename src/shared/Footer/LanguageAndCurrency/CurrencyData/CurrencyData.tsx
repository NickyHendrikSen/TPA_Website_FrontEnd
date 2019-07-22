import React, { Component } from 'react'
import "./CurrencyData.scss"
import axios from "axios"

interface IState{
    [currencies: string]: any | null
}

interface Currency{
    name: string;
}

class CurrencyData extends Component {

    constructor(props:any) {
        super(props)

        this.state = {
            currencies: []
        }
    }

    state:IState = {
        currencies: []
    }

    componentDidMount(){
        // axios.get("https://api.exchangeratesapi.io/latest?base=USD")
        //     .then(res => {
        //         const currencies = res.data;
        //         console.log(currencies);
        //         this.setState({currencies : currencies});
        //     })
        axios.get("https://api.exchangeratesapi.io/latest?base=USD")
        .then(res => res.data)
        .then(data => {
            this.setState({
                currencies: data,
            })
        });
    }

    render() {
        var {currencies} = this.state;

        return (
            // <div>
                // {currencies.rates.USD}
            // </div>
            <div>
                {Object.keys(currencies).map(key => (
                    // <span>
                    console.log(key + ", " + currencies[key].USD)
                    // </span>
                ))}
            </div>
        )
    }
}

export default CurrencyData
