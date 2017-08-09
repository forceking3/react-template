/**
 * Created by changjin.zhang on 6/19/2017.
 */
import {combineReducers} from "redux";
import locationReducer from './location';
function makeRootReducer(asyReducers){
    return combineReducers({locationReducer,...asyReducers});
}
export function injectReducer(store,{key,reducer}){
    store.asyncReducers[key]=reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
}
function mainReducer(initState={state:null},action){
    switch(action.type){
        default:return initState;
    }
}
export default makeRootReducer;