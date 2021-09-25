import React from "react";
import style from './styles/footer.module.scss';
import {FooterBottom} from "./FooterBottom";

const FooterContainer = ({data}) => {
    return (
        <div className={style['footer-container']} id='footer'>
            <div className={style['columns-container']}>
                <div className={style['column']}>
                    <img alt='monta-footer' className={style['monta']}
                         src='https://www.monta.ir/landings/Footer//Monta_Footer.svg'/>
                    <img alt='monta-footer-mobile' className={style['monta-mobile']}
                         src='https://www.monta.ir/landings/Footer//Monta%20Logo%20-%20landscape.svg'/>
                </div>
                {
                    data.columns.map((item) => {
                        return (
                            <div key={item.title} className={style["column"]}>
                                <div className={style['column-title']}>{item.title}</div>
                                {item.links && <div className={style['links-container']}>
                                    {item.links.map((link) => {
                                        return (
                                            <div key={link} className={style['link']}>{link}</div>
                                        )
                                    })}
                                </div>}
                                {item.title === data.columns[2].title &&
                                <div className={style['column-title-mobile']}>{data.columns[2].title}</div>}
                                {item.icons && <div className={style['icons-container']}>
                                    {item.icons.map((icon) => {
                                        return (
                                            <img key={icon} alt='monta-icon' className={style['icon']} src={icon}/>
                                        )
                                    })}
                                </div>}
                                {item.title === data.columns[2].title &&
                                <div className={style['column-mobile']}><img alt='etemad' src={data.Enamad}/></div>}
                                {item.communication && <div className={style['communication-container']}>
                                    <div className={style['tel-and-email']}>
                                        <span>
                                           <img alt='communication' src={item.communication.mailIcon}/>
                                            {item.communication.email}
                                        </span>
                                        <span>
                                            <img alt='communication' src={item.communication.telIcon}/>
                                            {item.communication.number}
                                        </span>
                                    </div>
                                    <div className={style['address']}>
                                        <img alt='location' src={item.communication.locationIcon}/>
                                        <span>{item.communication.address}</span>
                                    </div>
                                </div>}
                            </div>
                        )
                    })
                }
                <div className={style['column','etemad']}>
                    <img alt='etemad' src={data.Enamad}/>
                </div>
            </div>
            <hr/>
            <FooterBottom data={data}/>
        </div>
    )
}
export default FooterContainer;