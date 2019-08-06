import { ICurrency, ICurrencyState } from "../reducers/currencyReducers";
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk"
import axios from "axios";

export enum CurrencyActionTypes{
    GET_RATES = 'GET_RATES',
}

export interface ICurrencyGetRatesAction{
    type: CurrencyActionTypes.GET_RATES;
    rates: ICurrency;
}

export type CurrencyAction = ICurrencyGetRatesAction;

export const getAllRates: ActionCreator<
    ThunkAction<Promise<any>, ICurrencyState, null, ICurrencyGetRatesAction>
    > = () => {
        return async (dispatch: Dispatch) => {
            try{
                const response = await axios.get("https://api.exchangeratesapi.io/latest?base=USD");
                dispatch({
                    rates: response.data.results,
                    type: CurrencyActionTypes.GET_RATES,
                });
            } catch(err){
                console.log(err);
            }
        };
    };
