import React from "react";
import style from './styles/class-card.module.scss';
import {classCardIcons , units} from "../../../public/data/data";
const ClassCard = ({data}) => {
    return (
        <div className={style['card']}>
            <img className={style['teacher-img']} alt='teacher' src={data.teacherImageURL}/>
            <div className={style['details-container']}>
                <div className={style['course-name']}>
                    {data.subject}
                </div>
                <div className={style['container']}>
                    <div className={style['name-session-container']}>
                        <div className={style['name']}><img alt='profile' src={classCardIcons.profile}/><span>{data.teacherName}</span></div>
                        <div className={style['session']}><img alt='session' src={classCardIcons.sessions}/><span>{data.sessionNumber} جلسه </span></div>
                    </div>
                    <div className={style['price-container']}>
                        <div className={style['price']}>{data.priceWithOutOff}{units.toman}</div>
                        <div className={style['second-price']}>
                            <span className={style['second-price-num']}>{data.priceWithOff} </span>
                            <span>{units.toman}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ClassCard;