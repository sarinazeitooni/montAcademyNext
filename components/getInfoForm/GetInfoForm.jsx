import React, {useState} from 'react';
import style from './styles/get-info-form.module.scss';
import Modal from "./modal/Modal";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {GetInfotexts} from "../../public/data/data";
import {validMobile} from "./regex/Moile";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const GetInfoForm = () => {
    const [show , setShow] = useState(false);
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [option , setOption] = useState(0);
    const [numberClass , setNumberClass] = useState(style['']);
    const [nameClass , setNameClass] = useState(style['']);
    const [optionClass , setOptionClass] = useState(style['']);
    function ChangeHandler(field , value){
        field(value.target.value);
    }
    function Validation(){
        if(name!==''){
            setNameClass(style['']);
            if(number!=='' && validMobile.test(number)){
                setNumberClass(style['']);
                if(option!==0){
                    setOptionClass(style[''])
                    Submit();
                }else setOptionClass(style['error']);
            }else setNumberClass(style['error']);
        }else setNameClass(style['error']);
    }
    function Submit(){
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
                    toast.error( GetInfotexts.error,error);
                })
    }
    return (
        <div className={style['get-info-form-container']}>
            <h3 className={style['form-title']}>{GetInfotexts.title}</h3>
            <h3 className={style['form-title-mobile']}>{GetInfotexts.mobileTitle}</h3>
            <div className={style['form-data-container']}>
                <div className={style['data-fields']}>
                    <input autoFocus className={nameClass} value={name} type='text'
                           onChange={(e)=>{ChangeHandler(setName,e )}}  placeholder={GetInfotexts.nameInput}/>
                </div>
                <div className={style['data-fields']}>
                    <input className={numberClass} value={number} type='number'
                           onChange={(e)=>{ChangeHandler(setNumber,e )}}  placeholder={GetInfotexts.mobileInput}/>
                </div>
                <div className={style['data-fields']}>
                    <FormControl variant="standard">
                        <Select defaultValue={option}
                            value={option}
                            label={GetInfotexts.selectTitle}
                            className={optionClass}
                            onChange={(e)=>{ChangeHandler(setOption,e)}}>
                            {GetInfotexts.selectOptions.map((item) => {
                                return (<MenuItem key={item.text} value={item.value}>{item.text}</MenuItem>)
                            })}
                            <MenuItem  className={style['custom-option']} value={0} unselectable={true}>{GetInfotexts.selectTitle}</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div onClick={(e)=>{Validation()}} className={style['data-fields','submit']}>{GetInfotexts.submit}</div>
                <div onClick={()=>{setShow(true)}} className={style['data-fields','submit-mobile']}>{GetInfotexts.submit}</div>
            </div>
            <Modal close={()=>{setShow(false)}} show={show}/>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={true}
                closeOnClick
                rtl={true}
                pauseOnHover
            />
        </div>
    )}
export default GetInfoForm;