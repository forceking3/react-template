/**
 * Created by changjin.zhang on 6/12/2017.
 */
import React,{Component} from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import browserHistory from './src/routes/history';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import store from './src/store/createStore';

const routes=require('./src/routes/mainRoute').default(store);
render(
    <Provider store={store}>
        <Router history={browserHistory} children={routes} />
    </Provider>,
    document.querySelector("#root")
);