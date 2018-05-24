import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square';
import checkWinner from '../utils/checkWinner';
import { fetchData, API_BASE } from "../utils/fetchAvatar";



class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(25).fill(null),
      xIsNext: true,
<<<<<<< HEAD
      data: null
=======
>>>>>>> master
   }
  }


  componentDidMount() {
    const username = "nico";
    const url = `${API_BASE}/${username}.png`;
    fetchData(url).then(data => this.setState({ data }));
  }


  handleClick = (i) => {
    const clonedSquares = JSON.parse(JSON.stringify(this.state.squares))
    if (checkWinner(clonedSquares) || clonedSquares[i]){
      console.log(checkWinner)
      return;
    }
    clonedSquares[i] =  this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: clonedSquares,
      xIsNext: !this.state.xIsNext,
    })
  }

  renderSquare(i) {
    return (
      <Square className={`square${i}`} value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
    ) 
  }
    
    render() {

      if (!this.state.data) {
        return <h3>...Loading</h3>;
      }
  
      const avatar = this.state.data.url;
      const image =  <img src={this.state.data.url} />;

      console.log(avatar);

      const winner = checkWinner(this.state.squares);
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
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