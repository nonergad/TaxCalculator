import React from "react";
import CheckBox from "./CheckBox/CheckBox";
import style from "./TaxValue.module.scss"

export default function TaxValue(props) {
    return(
        <div className={style.Container}>
            <p className={style.Text}>Итого можете внести <br/>
            в качестве досрочных:</p>
            <div className={style.PayWrapper}>
                {props.totalTax.map((element, index) => {
                    return(
                        <div className={style.LineContainer} key={index}>
                            <div className={style.Line}>
                                <CheckBox/>
                                <span className={style.Money}>{element} рублей</span> <span className={style.Year}> в {index + 1}-ый год</span>
                            </div>
                            <div className={style.DivideLine}></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}