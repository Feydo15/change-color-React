import React, { useState } from 'react';
import './App.css';
import COLORS_ARRAY from "./colorsArray";

function App() {
    
  const [accentColor, setAccentColor] = React.useState("#282c34");
  const [count, setCount] = useState(0);

  const changeColor = () => {
        let randomInteger = Math.floor(COLORS_ARRAY.length * Math.random())
        setAccentColor(COLORS_ARRAY[randomInteger])
      }
const subtract = () =>{
  if(count <= 0){
    return 0;
  }else{
    return setCount(count - 1)
  }
}

  return (
    <div className="App" style={{backgroundColor:accentColor}}>
    <h1>Change color and counter React app</h1>
    <div id='color-box'> 
    <div className='display'>{count}</div>
    <button className='btn' style={{backgroundColor:'orange'}} onClick={() =>subtract()}>-</button>
    <button  className='btn1'style={{backgroundColor:accentColor}} id='color' onClick={() => changeColor()}>Click Me To Change Color</button>
    <button  className='btn' style={{backgroundColor:'green'}} onClick={() => setCount(count + 1)}>+</button>
    </div>

    </div>
  );
}

export default App;
