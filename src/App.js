import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Button from './Button'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello name="Jae" />
        <Hello name="Rowan" />
        <Button>New Btn</Button>
      </div>
    );
  }
}

export default App;
