import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

// console.log('store: ', store);
// console.log('store.getState(): ', store.getState());

store.subscribe(() => console.log('store data updated:', store.getState()))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root')
);

