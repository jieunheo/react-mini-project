import React, { useState } from 'react';
import Routes from './routes';
import Context from './utils/context';


//main app 
const App = () => {
  const [globalState, setGlobalState] = useState(0);

  const plusGlobalState = () => {
    setGlobalState(val => val + 1);
  }
  const minusGlobalState = () => {
    setGlobalState(val => val - 1);
  }

  return(
    <div>
      React
      <Context.Provider value={{
        globalState,
        plusGlobalState,
        minusGlobalState
      }}>
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;
