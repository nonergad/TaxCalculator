import { useState, useEffect } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import TaxPopUp from './components/TaxPopUp/TaxPopUp'

function App() {
  const [startFlag, setStartFlag] = useState(false)

  const startBtnHandler = () => {
    setStartFlag(!startFlag)
  }

  
  return (
    <div className='Main'>
      {startFlag ? <Button func={startBtnHandler}></Button> : <TaxPopUp func={startBtnHandler}/>}
    </div>
  );
}

export default App;
