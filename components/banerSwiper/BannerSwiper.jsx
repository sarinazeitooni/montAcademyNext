import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation , Autoplay} from 'swiper';
import style from './styles/baner-swiper.module.scss';
import { v4 as uuidv4 } from 'uuid';
SwiperCore.use([Navigation,Autoplay]);
const BannerSwiper = ({images}) => {
    return (
        <div className={style['banner-swiper-container']}>
            <Swiper
                spaceBetween={1} slidesPerView={1} navigation={true} autoplay={{
                "delay": 3000
            }}>
                {
                    images.map((item)=>{
                        return(
                            <SwiperSlide key={uuidv4()}>
                                <img alt='banners' className={style['desktop-view']} src={item.desktop} />
                                <img alt='banners' className={style['mobile-view']} src={item.mobile} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
};
export default BannerSwiper;
