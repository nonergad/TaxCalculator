import { useState } from 'react';
import style from'./App.module.scss';
import Button from './components/Button/Button';
import TaxPopUp from './components/TaxPopUp/TaxPopUp'

function App() {
  const [startFlag, setStartFlag] = useState(false)

  const startBtnHandler = () => {
    setStartFlag(!startFlag)
  }

  
  return (
    <div className={startFlag ? style.Main : style.MainChanged}>
      {startFlag ? <Button func={startBtnHandler}></Button> : <TaxPopUp func={startBtnHandler}/>}
    </div>
  );
}

export default App;
