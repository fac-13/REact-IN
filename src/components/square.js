import React from 'react';
import ReactDOM from 'react-dom';

function Square(props) {
  return (
    <button className={`square ${props.className}`}
      onClick={props.onClick}
      style={props.style}>
      {props.value}
   </button>
    )
}

export default Square;