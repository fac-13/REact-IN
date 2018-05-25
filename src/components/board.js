import React from 'react';
import Cell from './cell';
import Reset from './reset';
import checkWinner from '../utils/checkWinner';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(25).fill(null),
      nextPlayer: true,
      colours: Array(25).fill('transparent')
    }
  }

  handleClick = (i) => {
    const clonedCells = JSON.parse(JSON.stringify(this.state.cells))
    const clonedColours = JSON.parse(JSON.stringify(this.state.colours))
    if (checkWinner(clonedCells) || clonedCells[i]){
      return;
    }
    clonedCells[i] = this.state.nextPlayer ? "💩" : "👻";
    clonedColours[i] = this.state.nextPlayer ? "#abbc47" : "#4f2a59"
    this.setState({
      cells: clonedCells,
      nextPlayer: !this.state.nextPlayer,
      colours: clonedColours,
    })
  }
  handleReset = () => {
    this.setState({
      cells: Array(25).fill(null),
      nextPlayer: true,
      colours: Array(25).fill('transparent')
    })
  }

    render() {
      const gameOver = checkWinner(this.state.cells);
      let status;
      if (gameOver && this.state.nextPlayer === true) {
        status = "Game Over. The winner is Poooo....";
      } else if (gameOver && this.state.nextPlayer === false) {
        status = "Game Over. The winner is Boooo....";
      } else {
        status = "It's your turn to: " + (this.state.nextPlayer ? '💩' : '👻');
      }

      return (
        <React.Fragment>
          <div className="status-line" >{status}</div>
          {this.state.cells.map((_, i) => {
            return <Cell
              key = {i}  
              className={`cell${i}`}
              value={this.state.cells[i]}
              onClick={() => this.handleClick(i)}
              style={{ backgroundColor: this.state.colours[i] }}
            />
          })}
          <Reset
            className={"reset"}
            onClick={() => this.handleReset()}
          /> 
        
          </React.Fragment>
      );
    }
}

export default Board;