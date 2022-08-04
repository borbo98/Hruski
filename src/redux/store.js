import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./features/favourites/favouritesSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'

const reducers = combineReducers({
  favourites: favouritesReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export default store;
