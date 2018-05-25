import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square';
import checkWinner from '../utils/checkWinner';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(25).fill(null),
      xIsNext: true,
      colours: Array(25).fill('transparent')
    }
  }

  handleClick = (i) => {
    const clonedSquares = JSON.parse(JSON.stringify(this.state.squares))
    const clonedColours = JSON.parse(JSON.stringify(this.state.colours))
    if (checkWinner(clonedSquares) || clonedSquares[i]){
      return;
    }
    clonedSquares[i] = this.state.xIsNext ? "💩" : "👻";
    clonedColours[i] = this.state.xIsNext ? "#abbc47" : "#4f2a59"
    this.setState({
      squares: clonedSquares,
      xIsNext: !this.state.xIsNext,
      colours: clonedColours,
    })
  }

  renderSquare(i) {
    return (
      <Square
        className={`square${i}`}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        style = {{backgroundColor: this.state.colours[i]}}
      />
    ) 
  }
    
    render() {
      const winner = checkWinner(this.state.squares);
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "It's your turn to: " + (this.state.xIsNext ? '💩' : '👻');
      }

      return (
        <React.Fragment>
        <div className="status-line" >{status}</div>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
          </React.Fragment>
      );
    }
}

export default Board;