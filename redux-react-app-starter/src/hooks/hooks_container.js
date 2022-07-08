import React, { useContext, useEffect, useReducer, useState } from 'react';

import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions';
import Context from '../utils/Context';



const HookContainer = (props) => {
  const [value, setValue] = useState(0);
  const [effectValue, setEffectValue] = useState('');

  const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState);
  const context = useContext(Context);

  useEffect(() => {
    setTimeout(() => setEffectValue("Yeeeeees!!!"), 2000);
  }, [value]);

  const increment = () => {
    setValue(prevValue => prevValue + 1);
  }
  const decrement = () => {
    setValue(prevValue => prevValue - 1);
  }

  const changeUseEffectHandler = () => {
    setEffectValue('Change!!');
  }

  const dispatchHandlerTrue = () => {
    dispatch(ACTIONS.success());
  }
  const dispatchHandlerFalse = () => {
    dispatch(ACTIONS.failure());
  }

  return(
    <div>
      <h1>Hook</h1>
      <h2> Local Value: {value}</h2>
      <div>
        <button type='button' onClick={increment}>increment</button>
        <button type='button' onClick={decrement}>decrement</button>
      </div>
      <button type='button' onClick={changeUseEffectHandler}>change useEffect</button>
      {effectValue
        ? <h3>{effectValue}</h3>
        : <h3>Are You Okay?</h3>
      }
      <div>
        <button type='button' onClick={dispatchHandlerTrue}>dispatch true</button>
        <button type='button' onClick={dispatchHandlerFalse}>dispatch false</button>
      </div>
      {state.stateprop1
        ? <h4>까꿍!!!</h4>
        : <h4>우루루루루</h4>
      }
      <div>
        <button type='button' onClick={dispatchHandlerTrue}>dispatch true</button>
        <button type='button' onClick={dispatchHandlerFalse}>dispatch false</button>
      </div>
      <h4>global value: {context.globalValue} </h4>
      <div>
        <button type='button' onClick={context.incrementGlobal}>dispatch global true</button>
        <button type='button' onClick={context.decrementGlobal}>dispatch global false</button>
      </div>
      <h4>global context</h4>
      {context.globalContextValue
        ? <p>좋아</p>
        : <p>싫어</p>}
      <div>
        <button type='button' onClick={context.dispatchContexthHandlerTrue}>dispatch global context true</button>
        <button type='button' onClick={context.dispatchContextHandlerFalse}>dispatch global context false</button>
      </div>
    </div>
  );
}


export default HookContainer;
