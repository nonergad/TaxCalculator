import React from "react";
import style from "./Button.module.scss"

export default function Button(porps) {
    return(
        <button className={style.Button} onClick={porps.func} >Налоговый вычет</button>
    )
}