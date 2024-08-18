import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ecomReducer from '../slice/ecomSlice';

const reducer = combineReducers({
    ecomState:ecomReducer,
})

const store = configureStore({
    reducer,
})

export default store;