/**
 * Created by changjin.zhang on 4/19/2017.
 */
import * as t from './actionTypes';
import {module} from '../index';

function doAction(type,actionName,data=null){
	return {
		type,
		actionName:module+'/'+actionName,
		data
	}
}

function toggleDialog(show,text=''){
	const actionName='showDialog';
	return (dispatch,getState)=>{
		dispatch(doAction(t.SHOW_DIALOG,actionName,{showDialog:show,dialogText:text}));
	}
}

export {toggleDialog};