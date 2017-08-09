/**
 * Created by changjin.zhang on 6/19/2017.
 */
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import makeRootReducer from './mainReducer';
import { updateLocation } from './location';
import browserHistory from '../routes/history';
import config from '../../config/config';

const middleWare=config.env==='development'?[thunk,createLogger()]:[thunk];
const store=createStore(makeRootReducer(),{},compose(applyMiddleware(...middleWare)));
store.asyncReducers = {};
// To unsubscribe, invoke `store.unsubscribeHistory()` anytime
store.unsubscribeHistory = browserHistory.listen(updateLocation(store));
store.replaceReducer(makeRootReducer(store.asyncReducers));
export default store;
