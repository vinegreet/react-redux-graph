import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBarsHeight } from './inputActions';
import './BarsHeightInput.css';

const BarsHeightInput = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  }

  const buttonClickHandler = (event) => {
    event.preventDefault();
    const regex = new RegExp(/[0-9,]+/); // TODO: rework to smth like /([0-9]),([0-9])+/

    if (regex.test(input)) {
      const barsHeightStrings = input.split(',');
      const barsHeight = barsHeightStrings.map((str) => Number.parseInt(str));

      dispatch(setBarsHeight(barsHeight));
      if (error) setError(false);
    } else {
      if (!error) setError(true);
    }
  };

  return (
    <div className="bars-height-input_container">
      <input type="text" onChange={inputChangeHandler} />
      {error && <span className="error">Please enter numbers in "1,8,6,2,5,4,8,3,7" format.</span>}
      <button type="submit" onClick={buttonClickHandler}>Submit</button>
    </div>
  );
}

export default BarsHeightInput;
