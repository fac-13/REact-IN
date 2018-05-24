import React from 'react';
import ReactDOM from 'react-dom';

function Square(props){
  return (
    <button
      className="square" value={props.value} onClick={props.onClick}>
      {props.value}
   </button>
    )
}

export default Square;