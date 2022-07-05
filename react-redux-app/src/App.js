import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as ACTIONS from './store/actions/actions';


//main app 
const App = () => {
  const [globalState, setGlobalState] = useState(0);

  const [globalContextState, globalContextDispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState);

  const plusGlobalState = () => {
    setGlobalState(val => val + 1);
  }
  const minusGlobalState = () => {
    setGlobalState(val => val - 1);
  }

  const dispatchContextTrueHandler = () => {
    // dispatch(ACTIONS.SUCCESS);
    // dispatch({type: "SUCCESS"});
    globalContextDispatch(ACTIONS.success());
  }

  const dispatchContextFalseHandler = () => {
    // dispatch(ACTIONS.FAILURE);
    // dispatch({type: "FAILURE"});
    globalContextDispatch(ACTIONS.failure());
  }

  return(
    <div>
      React
      <Context.Provider value={{
        globalState,
        plusGlobalState,
        minusGlobalState,
        contextProps: globalContextState.stateprop2,
        dispatchContextTrueHandler,
        dispatchContextFalseHandler
      }}>
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;
