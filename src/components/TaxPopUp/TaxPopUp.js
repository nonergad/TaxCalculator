import React from "react";
import style from "./TaxPopUp.module.scss"
import { useState } from "react";
import TaxValue from "./TaxValue/TaxValue"
import WhatToChange from "./WhatToChange/WhatToChange";

export default function TaxPopUp(porps) {
  const [calculateFlag, setCalculateFlag] = useState(false);
  const [totalTax, setTotalTax] = useState([]);
  const [salary, setSalary] = useState('');
  const [emptyFlag, setEmptyFlag] = useState(false);
  const [decreaseStatus, setDecreaseStatus] = useState(false);

  
  let year = 1;
  let residue = 0;
  
  
  const calculateHandler = (event) => {
    if(event.keyCode==13 || event.type === 'click'){
        if (salary === '') {
            setEmptyFlag(true)
        } else {
            setEmptyFlag(false)
            let taxArr = []
            setCalculateFlag(true)
            let annual = (salary * 12) * 0.13
            while ((annual * year) < 260000) {
                taxArr.push(annual)
                year++
            }
            taxArr.push(260000 - (annual * (year - 1)))   
            setTotalTax(taxArr);
        }
    }
  }


  console.log(emptyFlag)
    return(
        <div className={style.TaxPopUpMain}>
            <button className={style.XButton} onClick={porps.func} ></button>
            <p className={style.Title}>Налоговый вычет</p>
            <p className={style.Article}>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляетне более 13% от своего официального годового дохода.</p>
            <p className={style.Text}>Ваша зарплата в месяц</p>
            <input className={style.InputTax} value={salary} placeholder='Введите данные' onKeyDown={(e) => calculateHandler(e)} onChange={(e)=>setSalary(e.target.value)}></input>
            {emptyFlag && <p>Поле обязательно для заполнения</p>}
            <button className={style.CalculateButton} onClick={(e) => calculateHandler(e)}>Рассчитать</button>
            {calculateFlag && <TaxValue totalTax={totalTax}/>}

            <div>
                <WhatToChange decreaseStatus={decreaseStatus} setDecreaseStatus={setDecreaseStatus}/>
            </div>
            <div className={style.AddButton}>Добавить</div>
        </div>
    )
}