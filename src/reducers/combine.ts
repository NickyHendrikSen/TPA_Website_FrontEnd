import { combineReducers } from 'redux';
import { loggedReducer } from './loginReducer';
import { currencyReducer } from './currencyReducers';
import { IAppState } from '../stores/store';
import { placesReducers } from './placesReducers';

const allReducers = combineReducers<IAppState>({
    currencyState: currencyReducer,
    placeState: placesReducers,
    // loginState: loggedReducer,
})

export default allReducers;

