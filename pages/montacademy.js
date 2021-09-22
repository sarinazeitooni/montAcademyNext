import Head from 'next/head';
import React from "react";
import {images , montaCademyClassList , schedule , montaCademyOptions , FooterData} from "../public/data/data";
import HeaderContainer from "../components/header/HeaderContainer";
import BannerSwiper from "../components/banerSwiper/BannerSwiper";
import GetInfoForm from "../components/getInfoForm/GetInfoForm";
import ClassesContainer from "../components/classesContainer/ClassesContainer";
import Schedule from "../components/montaAcademySchedule/Schedule";
import WhyMonta from "../components/whyMonta/WhyMonta";
import FooterContainer from "../components/footer/FooterContainer";
import {v4 as uuidv4} from "uuid";
export default function Montacademy() {
    const [time,setTime] = React.useState(false);
    setTimeout(function(){ setTime(true) }, 1500);
    const icons = ['180', '152', '167', '120'];
    return (
        <div>
            <Head>
                <title>منتآکادمی</title>
                <meta name="description" content="Generated by create next app"/>
                {icons.map((item)=>{
                    return(
                        <link key={uuidv4()} rel="icon" sizes={item + 'x' + item}
                              href={"https://www.monta.ir/client_resources/images/apple-touch-icon-" + item + 'px.png'}/>
                    )
                })}
            </Head>
            {
                time ? <React.Fragment>
                        <HeaderContainer/>
                        <BannerSwiper images={images}/>
                        <GetInfoForm/>
                        <ClassesContainer data={montaCademyClassList}/>
                        <Schedule  title={schedule.title} items={schedule.items}/>
                        <WhyMonta title={montaCademyOptions.title} data={montaCademyOptions.options}/>
                    <FooterContainer data={FooterData}/>
                    </React.Fragment>
                : <div className='loading'>
                <img alt='loading' src="https://www.monta.ir/client_resources/images/img/loader.gif"/>
                </div>
            }
        </div>
    )
};
