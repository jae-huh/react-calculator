import React from 'react';
import './Button.css';

class Button extends React.Component {
  clickedMethod = () => {
    this.props.onClick(this.props.children)
  }

  render() {
    var text = this.props.children;
    return (
      <button className="Button" onClick={this.clickedMethod}>{text}</button>
    );
  }
}

export default Button;
