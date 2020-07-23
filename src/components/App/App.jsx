import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import BarsHeightInput from '../BarsHeightInput';
import Graph from '../Graph';
import { selectBarHeights } from '../BarsHeightInput/inputReducer';
import { getOutput } from '../../helpers/calculateWalls';

const App = () => {
  const barHeights = useSelector(selectBarHeights);

  return (
    <div className="App">
      <BarsHeightInput />
      <p className="output">Output: {getOutput(barHeights)}</p>
      <Graph />
    </div>
  );
}

export default App;
