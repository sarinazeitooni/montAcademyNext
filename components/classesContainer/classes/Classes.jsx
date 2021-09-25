import React from 'react';
import style from './styles/classes.module.scss';
import ClassCard from "../classCard/ClassCard";
import {Swiper , SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from 'swiper';
import {v4 as uuidv4} from "uuid";
import ReactTooltip from "react-tooltip";
import {useMediaQuery} from 'react-responsive';
SwiperCore.use([Navigation]);
const Classes = ({title, extraTitle, mobileTitle, cards}) => {
    const isSmall = useMediaQuery({
        query: '(min-width: 320px) and (max-width:500px)'
    })
    const isMedium = useMediaQuery({
        query: '(min-width: 500px) and (max-width: 1220px)'
    })
    const isBig = useMediaQuery({
        query: '(min-width: 1220px)'
    });
    function size(){
        if(isSmall){
            return (2);
        }else{
            if(isMedium){
                return (3)
            }else{
                if(isBig){
                    return (4)
                }
            }
        }
    }
    return (
        <div className={style['class-container']}>
            <div className={style['text-container']}>
                <h2 className={style['class-title']}> {title} </h2>
                <h3>{mobileTitle}</h3>
                <span data-tip={extraTitle} className={style['class-extraTitle']}> {extraTitle} </span>
                <ReactTooltip />
            </div>
            <hr className={style['line']}/>
            <div className={style['cards-container']}>
                <Swiper slidesPerView={size()} navigation={cards.length>4 || isMedium || isSmall}>
                    {
                        cards.map((index) => {
                            return (
                                <SwiperSlide key={uuidv4()}>
                                    <ClassCard data={index}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}
export default Classes;