import React from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css'

class Calculator extends React.Component {
  state = {
    screen: '',
    screenArr: [],
    currentNum: ''
  }

  displayLeet = () => {
    this.setState({
      screen: 1337
    })
  }

  clear = () => {
    this.setState({
      screen: '',
      screenArr: [],
      currentNum: ''
    })
  }

  updateDisplay = (text) => {
    this.setState({
      screen: this.state.screen + text,
      currentNum: this.state.currentNum + text,
    })
  }

  plus = (text) => {
    // ['123', '+', '456']
    this.setState({
      screen: this.state.screen + text,
      screenArr: [...this.state.screenArr, this.state.currentNum, text],
      currentNum: ''
    })
  }

  equal = (text) => {
    // this.state.screenAr === ['12', '+']
    // this.state.curretNum === '43'
    var screenArr = [...this.state.screenArr, this.state.currentNum]
    this.setState({
      screen: this.state.screen + text + this.findAnswer(screenArr),
      screenArr: screenArr,
      currentNum: '',
    })
  }

  findAnswer = (calcArr) => {
    var ans = 0
    for (var i = 0; i < calcArr.length; i++) {
      if (calcArr[i] === '+') {
        var num1 = parseInt(calcArr[i - 1], 10);
        var num2 = parseInt(calcArr[i + 1], 10);
        ans = num1 + num2;
      }
    }
    return ans;
  }



  render() {
    this.findAnswer(['3', '+', '1'])

    return (
      <div className="Calculator">
        <Display answer={this.state.screen} />
        <Button onClick={this.updateDisplay}>7</Button>
        <Button onClick={this.updateDisplay}>8</Button>
        <Button onClick={this.updateDisplay}>9</Button><br />
        <Button onClick={this.updateDisplay}>4</Button>
        <Button onClick={this.updateDisplay}>5</Button>
        <Button onClick={this.updateDisplay}>6</Button><br />
        <Button onClick={this.updateDisplay}>1</Button>
        <Button onClick={this.updateDisplay}>2</Button>
        <Button onClick={this.updateDisplay}>3</Button><br />
        <Button onClick={this.updateDisplay}>0</Button>
        <Button onClick={this.equal}>=</Button>
        <Button onClick={this.plus}>+</Button><br />
        <button onClick={this.displayLeet}>1337</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
