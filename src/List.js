import React, { Component } from "react";
import Done from "./Done";

class List extends Component {
  render() {
    const toggle = this.props.toggle;
    const searchValue = this.props.searchValue;
    let todoitems = this.props.todoitems;
    const handleDelete = this.props.handleDelete;
    if (toggle) {
      todoitems = todoitems.filter((item) => {
        return item.text.toLowerCase().indexOf(searchValue) !== -1;
      });
    }
    const listitmes = todoitems.map((item) => (
      <div className="list-container" key={item.id} data-key={item.id}>
        <span className="list">
          <p>{item.text}</p>
          <p>{item.time}</p>
        </span>
        <Done />
        <button className="remove" onClick={(e) => handleDelete(e)}>
          Remove
        </button>
      </div>
    ));
    return <>{listitmes}</>;
  }
}

export default List;
