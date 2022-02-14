import React,  { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, { initialState }  from '../reducers/index'; //[x] Within App.js, import the useReducer hook, our application's reducer and initialState object.

import { addOne, applyNumber, changeOperation, clearDisplay} from '../actions/index';

function App() {
const [state, dispatch] = useReducer(reducer, initialState) //[x] Use useReducer hook to get access to the application state and the dispatch function.

//const handle1Click = () => {
//  dispatch(addOne())
//}

const handleAll = (number) => {
  dispatch(applyNumber(number))
}

const handleOperation = (operation) => {
  dispatch(changeOperation(operation))
}

const handleClear = () => {
  dispatch(clearDisplay())
}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleAll(1)}/> 
              <CalcButton value={2} onClick={() => handleAll(2)}/>
              <CalcButton value={3} onClick={() => handleAll(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleAll(4)}/>
              <CalcButton value={5} onClick={() => handleAll(5)}/>
              <CalcButton value={6} onClick={() => handleAll(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleAll(7)}/>
              <CalcButton value={8} onClick={() => handleAll(8)}/>
              <CalcButton value={9} onClick={() => handleAll(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperation("+")}/>
              <CalcButton value={"*"} onClick={() => handleOperation("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
