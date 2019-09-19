import React, { Component } from 'react'
import './GuestPlace.scss'
import Axios from 'axios'
import Calendar from 'react-calendar';

interface IProps{
    setCurrClass:any
}

export class GuestPlace extends Component<IProps> {
    
    state = {
        currency:[{
            symbol: '',
            name: '',
            symbol_native: '',
            decimal_digits: '',
            rounding: '',
            code: '',
            name_plural: ''
        }],
        exchange_rate:{
            base: '',
            date: '',
            rates:
            [{CAD:0}, {HKD:0}, {ISK:0}, {PHP:0}, {DKK:0}, {HUF:0}, {CZK:0}, {GBP:0}, {RON:0}, {SEK:0}, {IDR:0}, {INR:0}, {BRL:0}, {RUB:0}, {HRK:0}, {JPY:0}, {THB:0}, {CHF:0}, {EUR:0}, {MYR:0}, {BGN:0}, {TRY:0}, {CNY:0}, {NOK:0}, {NZD:0}, {ZAR:0}, {USD:0}, {MXN:0}, {SGD:0}, {AUD:0}, {ILS:0}, {KRW:0}, {PLN:0}], 
        },
        currSymbol:'$',
        currCode:'USD',
        currIndex:0,
        currPrice:0,
        currRate:1,
    }

    componentWillMount(){
        Axios.all([
            Axios.get('https://api.myjson.com/bins/13i713'),
            Axios.get('https://api.exchangeratesapi.io/latest?base=USD')
        ])
            .then(Axios.spread((currencyRes:any, exchangeRes:any)=>
            {
                this.setState({
                    currency:currencyRes.data,
                    exchange_rate:exchangeRes.data
                })   
            }))
    }

    showCurrList(){
        let currency = document.getElementsByClassName('popup-list-container') as HTMLCollectionOf<HTMLElement>
        
        if(currency[0].style.display === "none")
            currency[0].style.display = "block"
        else
            currency[0].style.display = "none"        
    }
        
    reset = () => {
        this.setState({
            currPrice:this.state.currPrice / this.state.currRate 
        })
    }
    
    changeCurrency = (index:number) => {
        let currency = document.getElementsByClassName('popup-list-container') as HTMLCollectionOf<HTMLElement>
        let currencyField = document.getElementById('currency') as HTMLInputElement
        var price = document.getElementById('price') as HTMLInputElement
            
        this.setState({
            currSymbol: this.state.currency[index].symbol,
            currCode: this.state.currency[index].code,
            currIndex: index,
        })

        var currRate = Object.keys(this.state.exchange_rate.rates).map((key:any) => {
            if(key === this.state.currency[index].code)
                return(this.state.exchange_rate.rates[key])
        }) 
        currRate = currRate.sort().slice(0, 1)
        currencyField.value = this.state.currency[index].symbol + ' • ' + this.state.currency[index].code + ' : ' + currRate + ' (Base Currency : '+this.state.exchange_rate.base+')'
        price.value = '' + (this.state.currPrice * Number(currRate)) 
        currency[0].style.display = "none"
    }

    changeSymbol(){

    }

    convertToUSD = () => {
        var price = document.getElementById('price') as HTMLInputElement
      
        this.setState({
            currPrice:price.value
        })
    }

    finish(){
        window.history.back();
    }

    test = () => {
        let maxGuest = document.getElementById('max-guest') as HTMLInputElement
        let currency = document.getElementById('currency') as HTMLInputElement
        let price = document.getElementById('price') as HTMLInputElement
        let error = document.getElementsByClassName('error') as HTMLCollectionOf<HTMLElement>

        if( 
            maxGuest.value !== '' &&
            currency.value !== '' &&
            price.value !== ''){
            error[2].style.display = 'none'
        }
        else{
            error[2].style.display = 'block'
        }
    }

    render() {
        const {currency} = this.state
        
        const allCurrencies = currency.map((curr:any, index:any) => {
            return(
                <div key={index} className="popup-list" onClick={()=>this.changeCurrency(index)}>{curr.symbol} • {curr.name}</div>
            )
        })

        return (
            <div className="guests-wrapper">
                <div className="inputs">
                    <div className="title">
                        <h1>Guests</h1>
                    </div>
                    <div className="sub-title">Guests Rules</div>
                    <div className="input">
                        <div>Max. Guest Allowed</div>
                        <div>
                            <input type="Number" name="max-guest" id="max-guest"/>
                        </div>
                    </div>
                    <div className="input">
                        <div>Price</div>
                        <div>
                            <span style={{padding:'0em 1em'}}>{this.state.currSymbol}</span><input type="Number" name="price" id="price" onChange={this.convertToUSD}/>
                        </div>
                    </div>
                    <div className="input">
                        <div>Currency</div>
                        <div>
                            <input type="Text" name="currency" id="currency" onClick={this.showCurrList}/>
                        </div>
                        <div className="popup-list-container">
                            <div className="list-wrapper">
                                {allCurrencies}
                            </div>
                        </div>
                    </div>
                    <div className="input">
                        <div className="calendar-container">
                            <Calendar
                                value={new Date()}
                            />
                        </div>
                    </div>
                    <div className="input">
                        <div className="btn-next">
                            <div className="btn" onClick={this.test}>Next</div>
                            <div className="finish" onClick={this.finish}>Finish</div>
                            <div className="error">Wrong input !</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GuestPlace
