import React from "react";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "Sticky Notes",
      color: "brown",
    }
  }

  render() {
    return <div>Hi</div>
  }
}

export default Board;