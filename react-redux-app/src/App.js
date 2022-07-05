import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as UserReducer from './store/hooks_state/user_input_hook_reducer';
import * as ACTIONS from './store/actions/actions';


//main app 
const App = () => {
  const [globalState, setGlobalState] = useState(0);

  const [globalContextState, globalContextDispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState);
  const [userContextState, userContextDispatch] = useReducer(UserReducer.UserInputHooksReducer, UserReducer.initialState);

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

  const contextChangeHandler = (event) => {
    userContextDispatch(ACTIONS.user_input_change(event.target.value));
  }
  const contextSubmitHandler = (event) => {
    event.preventDefault();
    event.persist(); // 기존에 사용하고 있던 이벤트 풀 ( Event Pool ) 에서 제거되고 사용자 코드로 사용
    userContextDispatch(ACTIONS.user_input_submit(event.target.useContext.value));
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
        dispatchContextFalseHandler,

        useContextChange: userContextState.user_text_change,
        useContextSubmit: userContextState.user_text_submit,
        contextChangeHandler,
        contextSubmitHandler
      }}>
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;
