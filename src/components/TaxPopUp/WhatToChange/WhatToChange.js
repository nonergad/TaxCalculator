import React from "react";
import style from "./WhatToChange.module.scss"

export default function WhatToChange(props) {

    console.log(props)
    return(
        <div className={style.Container}>
            <p className={style.Title}>Что уменьшаем?</p>
            <div className={style.ButtonContainer}>
                <button onClick={() => props.setDecreaseStatus(false)}  className={!props.decreaseStatus ? style.PaymentButtonActive : style.PaymentButton}>Платёж</button>
                <button onClick={() => props.setDecreaseStatus(true)}  className={props.decreaseStatus ? style.PaymentButtonActive : style.PaymentButton}>Срок</button>
            </div>
        </div>
    )
}