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
                <a download href='../../public/data/schedule.pdf'>
                    <div className={style['get-btn']}>
                        {MontAcademyScheduleTexts.btn}
                    </div>
                </a>
            </div>
        </React.Fragment>
    )
};
export default ScheduleMobile;