import React from 'react';
import Menu from "./Menu";
import style from './styles/header-container.module.scss';
import LoginAndSignUp from "./LoginAndSignUp";
const HeaderContainer = () => {
    return (
        <div className={style['header-container']}>
            <div className={style.header}>
                <Menu/>
                <LoginAndSignUp/>
            </div>
        </div>
    )
};
export default HeaderContainer;
