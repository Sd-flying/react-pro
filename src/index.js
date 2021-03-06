import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './redux/store'
import axios from 'axios'
import './mock'
import zhCN from 'antd/es/locale-provider/zh_CN';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={zhCN}>
            <App />
        </LocaleProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
