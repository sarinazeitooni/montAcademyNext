import React, {useState} from "react";
import style from './styles/modal.module.scss';
import {GetInfotexts} from "../../../public/data/data";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
function Modal({show, close}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [numberClass, setNumberClass] = useState(style['item']);
    const [nameClass, setNameClass] = useState(style['item']);
    const [option, setOption] = useState(0);
    const [optionClass , setOptionClass] = useState(style['options']);
    function ChangeHandler(field, value) {
        field(value.target.value);
    }
    function Validation() {
        if(name!==''){
            setNameClass(style['item']);
            if(number!=='' && number.length === 11 && number.charAt(0)=== '0' && number.charAt(1)=== '9' ){
                setNumberClass(style['item']);
                if(option!==0){
                    setOptionClass(style['options'])
                    Submit();
                }else setOptionClass(style['error'])
            }else setNumberClass(style['error']);
        }else setNameClass(style['error']);
    }
    function Submit() {
        setName('');
        setNumber('');
        setOption(0);
        axios({
            method: 'post',
            url: 'https://reqres.in/api/login/data',
            data: {
                name: name,
                mobile: number,
                majorid : option
            }
        }).then((res) => {
            toast(GetInfotexts.success);
        })
            .catch((error) => {
                toast( GetInfotexts.error,error);
            })
        close();
    }
    return (
        <React.Fragment>
            {show && <div className={style['modal-container']}>
                <div className={style['modal-pop-up']}>
                    <div className={style['icon-container']}>
                        <PhoneInTalkIcon/>
                    </div>
                    <div className={style['title']}>{GetInfotexts.title}</div>
                    <input autoFocus placeholder={GetInfotexts.nameInput} value={name} className={nameClass} id='name' onChange={(e) => {
                        ChangeHandler(setName, e)
                    }} type='text'/>
                    <input placeholder={GetInfotexts.mobileInput} value={number} className={numberClass} id='number'
                           onChange={(e) => {
                               ChangeHandler(setNumber, e)
                           }} type='number'/>
                    <ArrowDropDownIcon/>
                    <select className={optionClass} value={option} onChange={(e) => {
                        ChangeHandler(setOption, e)
                    }} id='options'>
                        {GetInfotexts.selectOptions.map((item) => {
                            return (<option key={item.text} value={item.value} className={style['option']}>{item.text}</option>)
                        })}
                        <option className={style['option']} value={0} hidden>{GetInfotexts.selectTitle}</option>
                    </select>
                    <div className={style['buttons']}>
                        <button className={style['cancel']} onClick={close}>{GetInfotexts.cancel}</button>
                        <button className={style['submit']} type='submit' onClick={(e) => {
                            Validation()
                        }}>{GetInfotexts.submit}</button>
                    </div>
                </div>
            </div>}
        </React.Fragment>
    )
}
export default Modal;