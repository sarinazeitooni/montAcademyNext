import React, {useEffect} from "react";
import style from './style/login.module.scss';
import {useSelector, useDispatch} from "react-redux";
import ReCAPTCHA from 'react-google-recaptcha';
const Login = ({data}) => {
    const rememberValue = useSelector(state => state.remember);
    const usernameValue = useSelector(state => state.username);
    const SITE_KEY = '6LcFg6YcAAAAAERg9CmELMFDmcnytu14pie2xsR7';
    const SECRET_KEY = '6LcFg6YcAAAAAPmT7uEw4DE8aONCYRdRh-plRLOz';
    const dispatch = useDispatch();
    function changeHandler() {
        dispatch({
            type: 'remember'
        });
    }
    function inputHandler(data){
        dispatch({
            type: 'username',
            payload: rememberValue ? data : ''
        });
    }
    function clickHandler(event){
        event.preventDefault();
    }
    useEffect(()=>{
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        window.onsubmit = ()=>{alert('recaptcha submit')};
        document.body.appendChild(script)
    },[])
    return (
        <React.Fragment>
            <div className={style['login-container']}>
                <img alt='login' src='https://www.monta.ir/client_resources/images/img/monta-color.png'/>
                <div className={style['input-container']}>
                    <div className={style['input-title']}>{data.user}</div>
                    <input type='text' defaultValue={rememberValue ? usernameValue : ''} onChange={(e)=>{
                        inputHandler(e.target.value)
                    }} placeholder={data.userPlaceHolder}/>
                </div>
                <div className={style['input-container']}>
                    <div className={style['input-title']}>{data.password}</div>
                    <div className={style['forgot-password']}>{data.forgotPass}</div>
                    <input type='text' placeholder={data.passPlaceHolder}/>
                </div>
                <button data-action='submit' onClick={(e)=>{clickHandler(e)}} className={style['login-btn']}>
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
            <ReCAPTCHA size="normal" sitekey="6LcFg6YcAAAAAERg9CmELMFDmcnytu14pie2xsR7" />
        </React.Fragment>
)
}
export default Login;