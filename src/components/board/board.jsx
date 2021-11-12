import React from "react";
import './board.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "Sticky Notes",
      color: "brown",
    }
  }

  render() {
    return <div className="page">
      <div className="board">
      </div>
    </div>
  }
}

export default Board;