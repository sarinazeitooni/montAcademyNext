import React from "react";
import style from './style/login.module.scss';
const Login = ({data}) => {
    const [remember, setRemember] = React.useState( typeof window !== 'undefined' && !JSON.parse(localStorage.getItem('remember')));
    function changeHandler(){
        setRemember(!remember);
        localStorage.setItem('remember',JSON.stringify(remember));
    }
    return (
        <div className={style['login-container']}>
            <img alt='login' src='https://www.monta.ir/client_resources/images/img/monta-color.png'/>
            <div className={style['input-container']}>
                <div className={style['input-title']}>{data.user}</div>
                <input type='text' placeholder={data.userPlaceHolder}/>
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
                <input checked={remember} onChange={()=>{changeHandler()}} className={style['remember-check']} id='remember-check' name='remember-check' type='checkbox'/>
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