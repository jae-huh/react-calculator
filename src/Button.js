import React from 'react';
import './Button.css';


class Button extends React.Component {
  onClick = () => {
    var text = this.props.children
    this.props.onClick(text)
  }

  render() {
    var text = this.props.children

    console.log(this.props)
    return (
      <button className="Button" onClick={this.onClick}>{text}</button>
    );
  }
}

export default Button;
