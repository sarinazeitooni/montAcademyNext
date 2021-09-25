import React from "react";
import style from './style/login.module.scss';
import {useSelector, useDispatch} from "react-redux";
const Login = ({data}) => {
    const rememberValue = useSelector(state => state.remember);
    const usernameValue = useSelector(state => state.username);
    const dispatch = useDispatch();
    function changeHandler() {
        dispatch({
            type: 'remember'
        });
    }
    function inputHandler(data){
        rememberValue && dispatch({
            type: 'username',
            payload: data
        });
    }
    return (
        <div className={style['login-container']}>
            <img alt='login' src='https://www.monta.ir/client_resources/images/img/monta-color.png'/>
            <div className={style['input-container']}>
                <div className={style['input-title']}>{data.user}</div>
                <input type='text' defaultValue={usernameValue} onChange={(e)=>{
                    inputHandler(e.target.value)
                }} placeholder={data.userPlaceHolder}/>
            </div>
            <div className={style['input-container']}>
                <div className={style['input-title']}>{data.password}</div>
                <div className={style['forgot-password']}>{data.forgotPass}</div>
                <input type='text' placeholder={data.passPlaceHolder}/>
            </div>
            <button className={style['login-btn']}>
                {data.login}
            </button>
            <div className={style['remember-container']}>
                <input checked={rememberValue} onChange={() => {
                    changeHandler()
                }} className={style['remember-check']} id='remember-check' name='remember-check' type='checkbox'/>
                <label htmlFor='remember-check'>{data.remember}</label>
            </div>
            <div className={style['new-member-container']}>
                <span>{data.newUser}</span>
                <span className={style['sign-up']}>{data.signUp}</span>
            </div>
        </div>
    )
}
export default Login;