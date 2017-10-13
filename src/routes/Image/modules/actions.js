/**
 * Created by changjin.zhang on 4/19/2017.
 */
import * as t from './actionTypes';
import {module} from '../index';
import fetchJsonp from 'fetch-jsonp';

function doAction(type,actionName,data=null){
	return {
		type,
		actionName:module+'/'+actionName,
		data
	}
}

function getData(callback){
	const actionName='getData';
	return (dispatch,getState)=>{
		dispatch(doAction(t.REQUEST_DATA,actionName));
		fetchJsonp('https://api.douban.com/v2/movie/top250')
		.then((res)=>res.json())
		.then((data)=>{
			dispatch(doAction(t.RECEIVE_DATA,actionName,data));
			callback&&callback(data);
		});
	}
}

export {getData};