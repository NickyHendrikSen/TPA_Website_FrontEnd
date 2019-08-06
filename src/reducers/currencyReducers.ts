import { Reducer } from 'redux';
import { CurrencyActionTypes } from '../actions/currencyActions';

export interface ICurrency{
    rates:Object
}

export interface ICurrencyState {
    readonly rates: ICurrency[];
}

const initialCurrencyState: ICurrencyState = {
    rates: []
}

export const currencyReducer: Reducer<any, any> = (
    state = initialCurrencyState,
    action:any
) => {
    switch(action.type) {
        case CurrencyActionTypes.GET_RATES: {
            return{
                ...state,
                rates: action.rates,
            }
        }
        default:
            return state;
    }  
};

