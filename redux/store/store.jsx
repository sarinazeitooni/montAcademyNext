import { applyMiddleware, createStore ,compose } from 'redux';
import reducer from "../reducers/reducer";
import logger from 'redux-logger';
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
const state= {};

const persistConfig = {
    key: "remember",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer,
    compose(applyMiddleware(logger))
)
export const persistor = persistStore(store);
export default store;