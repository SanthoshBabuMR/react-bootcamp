import React from 'react';
import App from './components/App';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const EvensOrOdds = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
export default EvensOrOdds;