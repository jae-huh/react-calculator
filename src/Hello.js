import React from 'react';
import './Hello.css';

class Hello extends React.Component {
  render() {
    var name = this.props.name

    return (
      <div className="Hello-container">
        <span className="Hello-name">Hello {name}</span>
      </div>
    );
  }
}

export default Hello;
