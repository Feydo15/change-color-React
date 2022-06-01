import React, { useState } from 'react';
import './App.css';
import COLORS_ARRAY from "./colorsArray";

function App() {
    
  const [accentColor, setAccentColor] = React.useState("#282c34");
    
  const changeColor = () => {
        let randomInteger = Math.floor(COLORS_ARRAY.length * Math.random())
        setAccentColor(COLORS_ARRAY[randomInteger])
      }

  return (
    <div className="App" style={{backgroundColor:accentColor}}>
    <div id='color-box'> 
    <button style={{color:accentColor}} id='color' onClick={() => changeColor()}>Click Me To Change Color</button>
    </div>

    </div>
  );
}

export default App;
