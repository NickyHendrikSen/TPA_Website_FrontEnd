import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import allReducers from './reducers/combine';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import configureStore, { IAppState } from './stores/store';
import { getAllRates } from './actions/currencyActions';

interface IProps{
    store: Store<IAppState>
}

const Root: React.SFC<IProps> = props => {
    return(
        <Provider store = {props.store}>
            <App />
        </ Provider>
    );
};

const store = configureStore();
store.dispatch(getAllRates());

ReactDOM.render(<Root store = {store} />, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
