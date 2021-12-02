import React from "react";
import style from "./TaxValue.module.scss"

export default function TaxValue(props) {
    return(
        <div>
            <p>Итого можете внести в качестве досрочных:</p>
            {props.totalTax.map((element, index) => {
                return(
                    <div className={style.LineContainer} key={index}>
                        <input className={style.CheckBox} type='checkbox'></input>
                        <p>{element} рублей в {index + 1}-ый год</p>
                    </div>
                )
            })}
        </div>
    )
}