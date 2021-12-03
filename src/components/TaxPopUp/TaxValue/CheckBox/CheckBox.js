import React from "react";
import style from "./CheckBox.module.scss"

export default function CheckBox(props) {
    return(
        <label>
            <input type="checkbox" className={style.CheckBox}/>
            <span className={style.BlankCheckBox}></span>
        </label>
    )
}