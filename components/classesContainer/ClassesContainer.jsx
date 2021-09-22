import React from 'react';
import style from './styles/classes-container.module.scss';
import Classes from "./classes/Classes";
const ClassesContainer = ({data})=>{
    return(
        <div className={style['classes-main-container']}>
            <div className={style['classes-container']}>
                {data.map((item)=>{
                    return(
                        <React.Fragment key={item.index}>
                            <Classes title={item.title} extraTitle={item.extraTitle} mobileTitle={item.mobileTitle} cards={item.cards}/>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
};
export default ClassesContainer;