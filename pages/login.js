import React from "react";
import Login from "../components/login/Login";
import {login} from "../public/data/data";
export default function LoginPage(){
    return (
            <Login data={login}/>
    )
};