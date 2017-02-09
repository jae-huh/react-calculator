import React from 'react';
import './Display.css';


class Display extends React.Component {
  render() {
    var ans = this.props.ans
    return (
      <div className="Display-window">{ans}</div>
    );
  }
}

export default Display;
