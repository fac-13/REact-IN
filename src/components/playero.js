import React from 'react';
import { fetchData, API_BASE } from "../utils/fetchAvatar";


class O extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = this.state.value;
    const url = `https://cors-anywhere.herokuapp.com/${API_BASE}/${value}.png`;
    fetchData(url)
    .then(data => {
      this.setState({ data })
    });
  }

  render() {

    if (!this.state.data) {
    return (
      <div className="playero">
      <h2>Player B</h2>
      <form onSubmit={this.handleSubmit}>
        <label><p> Please enter your name:</p>
        <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
        <input type="submit" value="Enter" />
      </form>
      </div>
      )}
    else {

      const {
        url
      } = this.state.data;
  
      return (
      <div className="playero">  
      <div className="avatar">
        <h2>Hello {this.state.value}</h2>
        <h4>Your task it to ...<span className="emoji">👻</span></h4>
        <figure className="avatar--container">
          <img className="avatar--img" src={url} />
        </figure>  
      <p>...and this is your friendly avatar picture</p>  
      </div>
      </div>
    );   
    }
  }

}

export default O;