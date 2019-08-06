import { ICurrencyState } from "../reducers/currencyReducers";
import allReducers from "../reducers/combine"
import { Store, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ILoggedState } from "../reducers/loginReducer";
import { IPlaceState } from "../reducers/placesReducers";

export interface IAppState{
    currencyState: ICurrencyState,
    placeState: IPlaceState
    // loginState: ILoggedState
}

const rootReducer = allReducers;

export default function configureStore(): Store<IAppState, any>{
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}