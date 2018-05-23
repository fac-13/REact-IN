import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }

render() {
  return (
    <button
      className="square" value={this.props.value} onClick={()=> this.setState({value: '💩'})}>
      {this.state.value}
   </button>
    )
  } 
}

export default Square;