import React, { Component } from "react";

class Textarea extends Component {
  state = {
    value: "",
  };

  handlestate = (e) => {
    this.setState({ value: e.target.value });
  };

  handleClick = () => {
    if (this.state.value !== "") {
      this.props.handleExchange(this.state.value);
      this.setState({ value: "" });
    }
  };

  render() {
    const toggle = this.props.toggle;
    if (toggle) return false;
    return (
      <div className="text-container">
        <textarea
          className="input-box"
          placeholder="Enter your Task"
          rows="3"
          value={this.state.value}
          onChange={this.handlestate}
        ></textarea>
        <button className="Add-Button" onClick={this.handleClick}>
          Add Task
        </button>
      </div>
    );
  }
}

export default Textarea;
