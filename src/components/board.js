import React from 'react';
import ReactDOM from 'react-dom';
import Cell from './cell';
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

   renderCell(i) {
    return (
      <Cell
        className={`cell${i}`}
        value={this.state.cells[i]}
        onClick={() => this.handleClick(i)}
        style = {{backgroundColor: this.state.colours[i]}}
      />
    ) 
  }
    
    render() {
      const winner = checkWinner(this.state.cells);
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "It's your turn to: " + (this.state.nextPlayer ? '💩' : '👻');
      }

      return (
        <React.Fragment>
        <div className="status-line" >{status}</div>
            {this. renderCell(0)}
            {this. renderCell(1)}
            {this. renderCell(2)}
            {this. renderCell(3)}
            {this. renderCell(4)}
            {this. renderCell(5)}
            {this. renderCell(6)}
            {this. renderCell(7)}
            {this. renderCell(8)}
            {this. renderCell(9)}
            {this. renderCell(10)}
            {this. renderCell(11)}
            {this. renderCell(12)}
            {this. renderCell(13)}
            {this. renderCell(14)}
            {this. renderCell(15)}
            {this. renderCell(16)}
            {this. renderCell(17)}
            {this. renderCell(18)}
            {this. renderCell(19)}
            {this. renderCell(20)}
            {this. renderCell(21)}
            {this. renderCell(22)}
            {this. renderCell(23)}
            {this. renderCell(24)}
          </React.Fragment>
      );
    }
}

export default Board;