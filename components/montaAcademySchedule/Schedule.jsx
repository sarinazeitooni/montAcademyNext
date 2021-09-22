import style from './styles/schedule.module.scss';
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
    Navigation
} from 'swiper';
import {v4 as uuidv4} from 'uuid';
import ScheduleMobile from "./ScheduleMobile";
SwiperCore.use([Navigation]);
const Schedule = ({title, items}) => {
    return (
        <div className={style['schedule-container-main']}>
            <div className={style['schedule-container']}>
                <div className={style['schedule-title']}>
                    {title}
                </div>
                {items && <div className={style['schedule-swiper']}>
                    <Swiper
                        spaceBetween={1} slidesPerView={1} navigation>
                    {
                        items.map((item) => {
                            return (
                                <SwiperSlide key={uuidv4()}>
                                <img alt='schedule' className={style['schedule-img']} src={item}/>
                                </SwiperSlide>
                            )
                        })
                    }
                    </Swiper>
                </div>}
            </div>
            <div className={style['schedule-mobile']}>
                <ScheduleMobile/>
            </div>
        </div>
    )
}
export default Schedule;