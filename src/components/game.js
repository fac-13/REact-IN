import React from 'react';
import Board from './board';

class Game extends React.Component {

  render() {
    return (
        <div className="game-board">
          <Board />
        </div>
    );
  }
}

export default Game;