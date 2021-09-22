import React from "react";
import Login from "../components/login/Login";
import {login} from "../public/data/data";
const LoginPage = () => {
    return (
        <React.Fragment>
            <Login data={login}/>
        </React.Fragment>
    )
};
export default LoginPage;
