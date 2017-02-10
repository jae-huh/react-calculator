import React from 'react';
import './Button.css';


class Button extends React.Component {
  render() {
    var text = this.props.children

    console.log(this.props)
    return (
      <button className="Button">{text}</button>
    );
  }
}

export default Button;
