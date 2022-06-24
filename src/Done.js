import React, { Component } from "react";

class Done extends Component {
  state = {
    buttontext: "Done",
  };

  handleDone = (e) => {
    const text = this.state.buttontext === "Done" ? "Undo" : "Done";
    const container = e.target.closest(".list-container");
    this.state.buttontext === "Done"
      ? container.classList.add("linethrough")
      : container.classList.remove("linethrough");
    this.setState({ buttontext: text });
  };

  render() {
    return (
      <button className="done" onClick={(e) => this.handleDone(e)}>
        {this.state.buttontext}
      </button>
    );
  }
}

export default Done;
