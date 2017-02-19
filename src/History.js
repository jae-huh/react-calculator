import React from 'react';
import './History.css';


class History extends React.Component {
  render() {
    var historyList = this.props.history;
    if (historyList.length > 12) {
      historyList.shift();
    }
    console.log(this.props.history)
    return (
      <div className="History-window">{
        this.props.history.map((value, i) => {
          var onClick = () => {this.props.onClick(value)}
          return (<div key={i} onClick={onClick}>{value}</div>)
        })
      }</div>
    );
  }
}

export default History;
