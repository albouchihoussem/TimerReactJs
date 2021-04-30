import './App.css';
import React, { Component } from 'react'; 
import Time from './components/Timer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { wa9t: '' }
    this.state = { }
    }
    myChangeHandler = (event) => {
      this.setState({wa9t: event.target.value});
    }

  render() {
    return (
      <div>
      <Time ms={3660} />

      <input className="case"
        type='text'
        value = '88555558'
        onChange={this.myChangeHandler}
      />
      </div>
    );
  }
} 

export default App;




