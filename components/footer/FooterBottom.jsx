import React from "react";
import style from './styles/footer-bottom-container.module.scss';
export const FooterBottom = ({data})=>{
    return(
    <div className={style['footer-bottom-container']}>
        <div className={style['right']}>
            {data.footerRightFirst}
            <img alt='heart' src={data.heart}/>
            {data.footerRightSecond}
        </div>
        <div className={style['left']}>
            {data.footerleft}
        </div>
    </div>
    )
};