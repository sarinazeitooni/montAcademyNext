import React from 'react';
import {menuData} from "../../public/data/data";
import style from './styles/login-and-signUp.module.scss';
const LoginAndSignUp = ()=>{
    return(
        <a href='/login'>
            <button className={style['login-and-signUp-btn']}>
                {menuData.loginAndSignUp}
            </button>
        </a>
    )
}
export default LoginAndSignUp;
