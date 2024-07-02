import { useState } from 'react';
import './App.css';

function App() {
  const [calculate, setCalculate] =  useState("");
  return (
    <div className="Apps">
      <div>
      <div className='diplay'>
        <div className='calculate' >
        <input type='text' value={calculate} name='calculate' onChange={(e) => setCalculate(e.target.value)} />
        <div className='key'>
         <button className='cal' onClick={()=> setCalculate(calculate+"+")}>+</button>
         <button onClick={()=> setCalculate(calculate+"7")}>7</button>
         <button onClick={()=> setCalculate(calculate+"8")}>8</button>
         <button onClick={()=> setCalculate(calculate+"9")}>9</button> <br/>
         <button className='cal' onClick={()=> setCalculate(calculate+"-")}>-</button>
         <button onClick={()=> setCalculate(calculate+"4")}>4</button>
         <button onClick={()=> setCalculate(calculate+"5")}>5</button>
         <button onClick={()=> setCalculate(calculate+"6")}>6</button> <br/>
         <button className='cal' onClick={()=> setCalculate(calculate+"*")}>*</button>
         <button onClick={()=> setCalculate(calculate+"1")}>1</button>
         <button onClick={()=> setCalculate(calculate+"2")}>2</button>
         <button onClick={()=> setCalculate(calculate+"3")}>3</button><br />
         <button className='cal' onClick={()=> setCalculate(calculate+"/")}>/</button>
         <button onClick={()=> setCalculate(calculate+"0")}>0</button>
         <button onClick={()=> setCalculate(calculate+".")}>.</button>
         <button onClick={()=> setCalculate(eval(calculate))}>=</button><br/>
         <button className='cale' onClick={()=> setCalculate("")}>C</button>
         </div>
         </div>
         </div>

      </div>
    </div>
  );
}

export default App;
