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
      cells: [],
    }
  }

  render() {
    return <div className="page">
      <button>
          Add Note
      </button>
      <div className="board">
        
        <Note/>
      </div>
    </div>
  }
}

export default Board;