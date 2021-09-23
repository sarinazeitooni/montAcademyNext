import React from "react";
import {MontAcademyScheduleTexts} from "../../public/data/data";
import style from './styles/schedule-mobile.module.scss';
const ScheduleMobile = ()=>{
    return(
        <React.Fragment>
            <div className={style['schedule-mobile-container']}>
                <div className={style['title']}>
                    {MontAcademyScheduleTexts.title}
                </div>
                <div className={style['subtitle']}>
                    {MontAcademyScheduleTexts.subtitle}
                </div>
                <a className={style['get-btn']} download href='../../public/data/schedule.pdf'>
                        {MontAcademyScheduleTexts.btn}
                </a>
            </div>
        </React.Fragment>
    )
};
export default ScheduleMobile;