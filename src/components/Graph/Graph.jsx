import React from 'react';
import { useSelector } from 'react-redux';
import { selectBarHeights } from '../BarsHeightInput/inputReducer';
import './Graph.css';
import { getWallIndexes } from '../../helpers/calculateWalls';

const Graph = () => {
  const barHeights = useSelector(selectBarHeights);
  const wallIndexes = getWallIndexes(barHeights);

  const renderLines = barHeights.map((height, idx) => {
    const wallClassName = wallIndexes.includes(idx) ? 'graph_bar--wall' : '';
    return (
      <div
        key={`${idx}th_bar_of_height_${height}`}
        className={`graph_bar ${wallClassName}`}
        style={{
          height: `${height * 10}px`
        }}
      />
    );
  });
  
  return (
    <div className="graph_container">
      {renderLines}
    </div>
  );
}

export default Graph;
