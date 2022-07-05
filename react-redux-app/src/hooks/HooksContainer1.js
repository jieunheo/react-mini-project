import React, { useState, useEffect, useReducer, useContext } from "react";
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions';
import Context from "../utils/context";

const HooksContainer1 = () => {
  const context = useContext(Context);

  const [value, setValue] = useState(0);
  const [effect, setEffect] = useState(null);

  const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState);

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

  const dispatchTrueHandler = () => {
    // dispatch(ACTIONS.SUCCESS);
    // dispatch({type: "SUCCESS"});
    dispatch(ACTIONS.success());
  }

  const dispatchFalseHandler = () => {
    // dispatch(ACTIONS.FAILURE);
    // dispatch({type: "FAILURE"});
    dispatch(ACTIONS.failure());
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
      <div>
        {state.stateprop1 ? <p>True!</p> : <p>False!</p>}
        <button onClick={dispatchTrueHandler}>Dispatch True</button>
        <button onClick={dispatchFalseHandler}>Dispatch False</button>
      </div>
      <div>
        <p>{context.globalState}</p>
        <button onClick={context.plusGlobalState}>Context Plus</button>
        <button onClick={context.minusGlobalState}>Context Minus</button>
      </div>
      <div>
        {context.contextProps ? <p>True</p> : <p>False</p>}
        <button onClick={context.dispatchContextTrueHandler}>Dispatch Context True</button>
        <button onClick={context.dispatchContextFalseHandler}>Dispatch Context False</button>
      </div>
    </div>
  )
}

export default HooksContainer1;