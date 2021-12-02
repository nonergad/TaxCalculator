import React from "react";
import style from "./WhatToChange.module.scss"

export default function WhatToChange() {
    return(
        <div className={style.Container}>
            <p className={style.Title}>Что уменьшаем?</p>
            <div className={style.ButtonContainer}>
                <div className={style.PaymentButton}>Платёж</div>
                <div className={style.PaymentButton}>Срок</div>
            </div>
        </div>
    )
}