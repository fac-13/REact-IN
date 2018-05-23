import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
render() {
  return (
  <button className="square">
  {this.props.value}
  </button>
    )
  } 
}

export default Square;