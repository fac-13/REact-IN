import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

export default Board;