import React from 'react';
import './Display.css';


class Display extends React.Component {
  render() {
    return (
      <div className="Display-window">{this.props.answer}</div>
    );
  }
}

export default Display;
