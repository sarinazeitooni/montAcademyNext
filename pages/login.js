import React from "react";
import Login from "../components/login/Login";
import {Provider} from "react-redux";
import {login} from "../public/data/data";
import store , {persistor} from "../redux/store/store";
import { PersistGate } from 'redux-persist/integration/react';
export default function LoginPage(){
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Login data={login}/>
            </PersistGate>
        </Provider>
    )
};