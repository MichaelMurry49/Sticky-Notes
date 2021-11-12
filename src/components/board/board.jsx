import React from "react";
import './board.css';
import Note from '../note/note'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "Sticky Notes",
      color: "brown",
      notes: [],
    }
  }

  render() {
    return <div className="page">
      <div className="board">
        <button>
          Add Note
        </button>
        <Note/>
      </div>
    </div>
  }
}

export default Board;