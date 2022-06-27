import React, { Component } from "react";

class Done extends Component {
  state = {
    buttontext: "Done",
  };

  handleDone = () => {
    const text = this.state.buttontext === "Done" ? "Undo" : "Done";
    this.props.handleStrike(this.props.item.id);
    this.setState({ buttontext: text });
  };

  render() {
    return (
      <button className="done" onClick={() => this.handleDone()}>
        {this.state.buttontext}
      </button>
    );
  }
}

export default Done;
