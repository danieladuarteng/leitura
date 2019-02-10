import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import middleware from './middleware'
import './index.css'

const store = createStore(
    reducer,
    middleware
)

ReactDOM.render(<HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
</HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
