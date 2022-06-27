import React, { Component } from "react";
import Done from "./Done";

class List extends Component {
  handleAnimation = (id) => {};
  render() {
    const toggle = this.props.toggle;
    const searchValue = this.props.searchValue;
    let todoitems = this.props.todoitems;
    const handleDelete = this.props.handleDelete;
    if (toggle) {
      todoitems = todoitems.filter((item) => {
        return (
          item.text.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        );
      });
    }
    const listitmes = todoitems.map((item) => (
      <div
        className={
          item.remove ? "list-container remove-animation" : "list-container"
        }
        key={item.id}
        data-key={item.id}
      >
        <div className={item.done ? "list linethrough" : "list"}>
          <p>{item.text}</p>
          <p>created on {item.time}</p>
        </div>
        <div className="button-container">
          <Done item={item} handleStrike={this.props.handleStrike} />
          <button className="remove" onClick={() => handleDelete(item.id)}>
            Remove
          </button>
        </div>
      </div>
    ));
    return <>{listitmes}</>;
  }
}

export default List;
