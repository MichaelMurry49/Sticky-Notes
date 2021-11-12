import React from "react";
import './note.css';

class Note extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }


  render() {
    return <div onChange={(e) => this.setState({text: e.target.value})} className="note"><input type="text" value={this.state.text}/></div>
  }
}

export default Note;