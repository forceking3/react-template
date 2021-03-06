/**
 * Created by changjin.zhang on 6/29/2017.
 */
import {Route,IndexRoute} from 'react-router';
import React,{Component} from 'react';
import App from '../App';
import Home from './Home';
import Demo from './Demo';
import Image from './Image';
const mainRoute=(store)=>({
    path:'/',
    indexRoute:Home(store),
    component:App,
    childRoutes:[
	    Demo(store),
	    Image(store),
    ]
});

export default mainRoute;