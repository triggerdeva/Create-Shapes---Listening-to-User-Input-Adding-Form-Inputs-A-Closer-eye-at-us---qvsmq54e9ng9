import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const[shape, setShape]=useState('square');
  const[arr, setArr]=useState([]);

  let numberOfDiv=[];
  const handleChange = (e)=>{
    setShape(e.target.value);
  }

  const handleClick = ()=>{
    setArr([...arr, shape])
  }
  console.log(numberOfDiv)
  return (
    <div id="main">
      <div id="shape-creator">
          <select name="shape" onChange={handleChange}>
            <option value="square">Square</option>
            <option value="circle">Circle</option>
          </select>
          <button onClick={handleClick}>Add shape</button>
      </div>
      <div id="shapes-holder">
        {arr.map((shape, index)=>{
          return <div className={shape}>{index}</div>
        })}
      </div>
    </div>
  )
}


export default App;
