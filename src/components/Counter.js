import React, { Component } from 'react';
import '../style.css';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {counter,increment,decrement}=this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={'http://bostonreact.org/37fe8322b169ddbdeabf75930e886ac6.png'} 
          className="App-logo" 
          alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={increment}>
            +
          </button>
          {counter}
          <button onClick={decrement}>
            -
        </button>
        </p>
      </div>
    );
  }
}

export default Counter;
