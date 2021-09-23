import React from 'react';
import Link from 'next/link'
import {menuData} from "../../public/data/data";
import style from './styles/login-and-signUp.module.scss';
const LoginAndSignUp = ()=>{
    return(
        <Link href='/login'>
            <a className={style['login-and-signUp-btn']}>
                {menuData.loginAndSignUp}
            </a>
        </Link>
    )
}
export default LoginAndSignUp;
