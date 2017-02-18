import React from 'react';
import './History.css';


class History extends React.Component {
  render() {
    return (
      <div className="History-window">{this.props.history}</div>
    );
  }
}

export default History;
