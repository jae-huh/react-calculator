import React from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css'

class Calculator extends React.Component {
  state = {
    ans: 0
  }

  updateAnswer = (num) => {
    console.log('updateAnswer', num)
    this.setState({
      ans: num
    })
  }

  render() {
    var ans = this.state.ans
    return (
      <div className="Calculator">
        <Display ans={ans} />
        <Button onClick={this.updateAnswer}>7</Button>
        <Button onClick={this.updateAnswer}>8</Button>
        <Button onClick={this.updateAnswer}>9</Button><br />
        <Button onClick={this.updateAnswer}>4</Button>
        <Button onClick={this.updateAnswer}>5</Button>
        <Button onClick={this.updateAnswer}>6</Button><br />
        <Button onClick={this.updateAnswer}>1</Button>
        <Button onClick={this.updateAnswer}>2</Button>
        <Button onClick={this.updateAnswer}>3</Button>
      </div>
    );
  }
}

export default Calculator;
