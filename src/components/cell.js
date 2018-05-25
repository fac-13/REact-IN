import React from 'react';

function Cell(props) {
  return (
    <button className={`cell ${props.className}`}
      onClick={props.onClick}
      style={props.style}>
      {props.value}
   </button>
    )
}

export default Cell;