import React from 'react';
import { useState } from 'react';
import './App.css'

const App = () => {
  const gridSize=3;
  const[matrix,setMatrix]=useState(Array.from({length:gridSize},()=> Array(gridSize).fill(false)));
  const[click,setClick]=useState(0);
  const[orange,setOrange]=useState(false);
  
  const handleClick = (row, col) => {
    if (orange || matrix[row][col]) return;

    const newMatrix = matrix.map((rowArray, rowIndex) =>
      rowArray.map((cell, colIndex) =>
        rowIndex === row && colIndex === col ? true : cell
      )
    );
    setMatrix(newMatrix);
    setClick((prev) => prev + 1);
    if (click + 1 === gridSize * gridSize) {
      setTimeout(() => setOrange(true), 500);}};

      const reset = () => {
        setMatrix(Array.from({ length: gridSize }, () => Array(gridSize).fill(false)));
        setClick(0);
        setOrange(false);
      };


  return (
    <div className='App'>
      
    <h1>
      3x3 matrix
    </h1>
    <div className='grid'>
    {matrix.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${orange ? "orange" : cell ? "green" : ""}`}
              onClick={() => handleClick(rowIndex, colIndex)}
            >
              {`${rowIndex},${colIndex}`}
            </div>
          ))
        )}
    </div>
    <button onClick={reset}>RESET</button>
    </div>
  );
}

export default App;
