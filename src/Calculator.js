import React from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css'

class Calculator extends React.Component {
  state = {
    ans: 0
  }

  render() {
    var ans = this.state.ans
    return (
      <div className="Calculator">
        <Display ans={ans} />
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button><br />
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button><br />
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </div>
    );
  }
}

export default Calculator;
