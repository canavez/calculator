import Result from './components/Result';

import { useState } from 'react';

import './App.css';

function App() {

  const [result, setResult] = useState(0)
  const [numUm, setNumUm] = useState(0)
  const [operation, setOperation] = useState("")

  const inputNum = (e) => {
    var num = e.target.value
    if (result.length >= 10) {return}
    if (result === 0) {
      setResult(num)
    } else {
      setResult(result + num)
    }
  }

  const clearNum = () => {
    setResult(0)
    setNumUm(0)
    setOperation("")
  }

  const invertNum = () => {
    setResult(result * -1)
  }

  const percentageNum = () => {
      setResult(parseFloat(result * 0.01).toFixed(5))
  }

  const resolve = () => {
    if (operation === "/") {
      setResult(parseFloat(numUm / result).toFixed(5))
      setNumUm(0)
      setOperation("")
    } else if (operation === "*") {
      setResult(parseFloat(numUm * result).toFixed(5))
      setNumUm(0)
      setOperation("")
    } else if (operation === "-") {
      setResult(numUm - result)
      setNumUm(0)
      setOperation("")
    } else if (operation === "+") {
      setResult(parseFloat(numUm) + parseFloat(result))
      setNumUm(0)
      setOperation("")
    }
  }

  const divide = () => {
    setNumUm(parseFloat(result))
    setOperation("/")
    setResult(0)
  }

  const multiply = () => {
    setNumUm(result)
    setOperation("*")
    setResult(0)
  }

  const minus = () => {
    setNumUm(result)
    setOperation("-")
    setResult(0)
  }
 
  const plus = () => {
    setNumUm(result)
    setOperation("+")
    setResult(0)
  }

  const comma = () => {
    setResult(result + ".")
  }

  return (
    <div className="App">
      <Result result={result}/>

      <div className="keys-container">

        <div className="line">
          <button className="brighter-btn" onClick={clearNum}>AC</button>
          <button className="brighter-btn" onClick={invertNum}>+/-</button>
          <button className="brighter-btn"onClick={percentageNum}>%</button>
          <button className="colored-btn" onClick={divide}>/</button>
        </div>
        <div className="line">
          <button value={7} onClick={inputNum}>7</button>
          <button value={8} onClick={inputNum}>8</button>
          <button value={9} onClick={inputNum}>9</button>
          <button className="colored-btn" onClick={multiply}>*</button>
        </div>
        
        <div className="line">
          <button value={4} onClick={inputNum}>4</button>
          <button value={5} onClick={inputNum}>5</button>
          <button value={6} onClick={inputNum}>6</button>
          <button className="colored-btn" onClick={minus}>-</button>
        </div>
        
        <div className="line">
          <button value={1} onClick={inputNum}>1</button>
          <button value={2} onClick={inputNum}>2</button>
          <button value={3} onClick={inputNum}>3</button>
          <button className="colored-btn" onClick={plus}>+</button>
        </div>
        
        <div className="line">
          <button className="zero" value={0} onClick={inputNum}>0</button>
          <button onClick={comma}>,</button>
          <button className="colored-btn" onClick={resolve}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
