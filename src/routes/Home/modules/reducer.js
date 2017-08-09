/**
 * Created by changjin.zhang on 4/19/2017.
 */
import { combineReducers } from 'redux'
import * as t from './actionTypes'

const initUiState = {
	loading: false,
	error: null,
	lastUpdated: null,
};
function ui(state = initUiState, action) {
	switch (action.type) {
		case t.REQUEST_DATA:
			return Object.assign({}, state, {
				loading: true,
				error: null
			});
		case t.RECEIVE_DATA:
			return Object.assign({}, state, {
				loading: false,
				error: null,
				lastUpdated: action.updateDate,
			});
		case t.RECEIVE_ERROR:
			return Object.assign({}, state, {
				loading: false,
				error: action.error,
				lastUpdated: action.updateDate,
			});
		default:
			return state
	}
}

const initDataState = {
	json: [],
	showDialog:false,
	dialogText:''
};
function data(state = initDataState, action) {
	switch (action.type) {
		case t.RECEIVE_DATA:
			return Object.assign({}, state, {
				json: action.data?action.data:[]
			});
		case t.SHOW_DIALOG:
			return {
				showDialog:action.data.showDialog,
				dialogText:action.data.dialogText
			};
		default:
			return state
	}
}

const reducer = combineReducers({
	ui,
	data,
});

export default reducer
