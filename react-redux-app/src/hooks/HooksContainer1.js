import React, { useState, useEffect } from "react";


const HooksContainer1 = () => {
  const [value, setValue] = useState(0);
  const [effect, setEffect] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEffect('useEffect!!!');
    }, 3000);
  }, [value]);

  const plusValue = () => {
    setValue(val => val + 1);
  }

  const minusValue = () => {
    setValue(val => val - 1);
  }

  const changeEffect = () => {
    setEffect('changed!!!');
  }

  return (
    <div>
      React Hooks
      <div>
        <p>{value}</p>
        <button onClick={plusValue}>PLUS</button>
        <button onClick={minusValue}>MINUS</button>
      </div>
      <div>
        {effect ? <p>{effect}</p> : <p>no value</p>}
        <button onClick={changeEffect}>Change</button>
      </div>
    </div>
  )
}

export default HooksContainer1;