import React, { useState, useReducer } from 'react';

import Routes from './routes';
import Context from './utils/Context';
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as UserReducer from './store/hooks_state/user_input_hooks_reducer';
import * as ACTIONS from './store/actions/actions';

//main app 
const App = () => {
  const [globalValue, setGlobalValue] = useState(0);
  const [globalContextValue, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState);
  const [globalUserValue, dispatchUserGlobal] = useReducer(UserReducer.UserHooksReducer, UserReducer.initialState);

  const incrementGlobal = () => {
    setGlobalValue(prevValue => prevValue + 1);
  }
  const decrementGlobal = () => {
    setGlobalValue(prevValue => prevValue - 1);
  }


  const dispatchContexthHandlerTrue = () => {
    dispatchContextGlobal(ACTIONS.success());
  }
  const dispatchContextHandlerFalse = () => {
    dispatchContextGlobal(ACTIONS.failure());
  }


  const dispatchUserChangeHandler = (event) => {
    dispatchUserGlobal(ACTIONS.user_input_change(event.target.value));
  }
  const dispatchUserSubmitHandler = (event) => {
    event.preventDefault();
    event.persist(); // 이벤트 아웃 프로세스

    dispatchUserGlobal(ACTIONS.user_input_submit(event.target.useContext.value));
  }

  return(
    <Context.Provider value={{
      globalValue,
      incrementGlobal,
      decrementGlobal,

      globalContextValue: globalContextValue.props2,
      dispatchContexthHandlerTrue,
      dispatchContextHandlerFalse,

      globalUserChangeValue: globalUserValue.changeValue,
      globalUserSubmitValue: globalUserValue.submitValue,
      dispatchUserChangeHandler: (event) => dispatchUserChangeHandler(event),
      dispatchUserSubmitHandler: (event) => dispatchUserSubmitHandler(event)
    }}>
      React
      <Routes />
    </Context.Provider>
  );
}


export default App;
