import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';
import initState from "../initState";




const createStoreClient = createStore(reducers, initState, applyMiddleware(thunk));

export default createStoreClient;
