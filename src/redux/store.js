import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from './slice/todoSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer,persistStore } from "redux-persist";
import thunk from 'redux-thunk';

const persistConfig ={
    key:'root',
    storage,
}
const TodoReducer = {todo:todoReducer}

const persistedReducer = persistReducer(persistConfig,todoReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:[thunk]
    
})
export const persistor = persistStore(store)