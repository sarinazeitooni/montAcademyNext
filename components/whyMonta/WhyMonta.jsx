import React from "react";
import {useState} from "react";
import style from './styles/why-monta.module.scss';

const WhyMonta = ({title, data}) => {
    const [index, setIndex] = useState(0);

    function urlHandler(i) {
        setIndex(i - 1);
    }

    return (
        <div className={style['why-monta-container-main']}>
            <div className={style['why-monta-container']}>
                <div className={style['why-monta-title']}>{title}</div>
                <div className={style['why-monta-items']}>
                    <div className={style['item-container']}>
                        {data.map((item) => {
                            return (
                                <div className={`${index + 1 === item.index && style['selected']}  ${style['options']}`}
                                     onClick={() => {
                                         urlHandler(item.index)
                                     }} key={item.index}>
                                    <span className={style['index']}> {item.index}</span>
                                    <span className={style['option']}>{item.title}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className={style['item-img']}>
                        <img alt='whymonta' src={data[index].url}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhyMonta;