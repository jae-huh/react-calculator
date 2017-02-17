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

  numOperation = (text) => {
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
      currentNum: ''
    })
  }

  findAnswer = (calcArr) => {
    // ['1', '+', '2', '+', '3']
    var ans = 0
    for (var i = 0; i < calcArr.length; i++) {
      var num1 = parseFloat(calcArr[i - 1], 10);
      var num2 = parseFloat(calcArr[i + 1], 10);
      if (calcArr[i] === 'x') {
        ans = num1 * num2;
        calcArr.splice(i-1, 3, ans);
        i -= 2;
      } else if (calcArr[i] === '/') {
        ans = num1 / num2;
        calcArr.splice(i-1, 3, ans);
        i -= 2;
      }
    }
    for (var j = 0; j < calcArr.length; j++) {
      var num12 = parseFloat(calcArr[j - 1], 10);
      var num22 = parseFloat(calcArr[j + 1], 10);
      if (calcArr[j] === '+') {
        ans = num12 + num22;
        calcArr.splice(j-1, 3, ans);
        j -= 2;
      } else if (calcArr[j] === '-') {
        ans = num12 - num22;
        calcArr.splice(j-1, 3, ans);
        j -= 2;
      }
    }
    console.log(calcArr);
    return ans;
  }



  render() {
    return (
      <div className="Calculator">
        <Display answer={this.state.screen} />
        <Button onClick={this.updateDisplay}>7</Button>
        <Button onClick={this.updateDisplay}>8</Button>
        <Button onClick={this.updateDisplay}>9</Button>
        <Button onClick={this.numOperation}>/</Button><br />
        <Button onClick={this.updateDisplay}>4</Button>
        <Button onClick={this.updateDisplay}>5</Button>
        <Button onClick={this.updateDisplay}>6</Button>
        <Button onClick={this.numOperation}>x</Button><br />
        <Button onClick={this.updateDisplay}>1</Button>
        <Button onClick={this.updateDisplay}>2</Button>
        <Button onClick={this.updateDisplay}>3</Button>
        <Button onClick={this.numOperation}>-</Button><br />
        <Button onClick={this.updateDisplay}>0</Button>
        <Button onClick={this.updateDisplay}>.</Button>
        <Button onClick={this.equal}>=</Button>
        <Button onClick={this.numOperation}>+</Button><br />
        <button onClick={this.displayLeet}>1337</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default Calculator;
