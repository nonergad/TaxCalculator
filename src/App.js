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
    <div className={startFlag ? style.MainChanged : style.Main }>
      {startFlag ? <TaxPopUp func={startBtnHandler}/> :<Button func={startBtnHandler}></Button> }
    </div>
  );
}

export default App;
