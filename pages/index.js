import React from "react";
import {v4 as uuidv4} from "uuid";
import Head from "next/head";
import {icons} from "../public/data/data";
export default function Home(){
    return(
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
    )
}