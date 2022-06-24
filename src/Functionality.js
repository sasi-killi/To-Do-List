import React, { Component } from "react";
import Search from "./Search";
import List from "./List";
import Textarea from "./Textarea";

class Functionality extends Component {
  state = {
    toggle: false,
    searchValue: "",
    todoitems: [
      {
        text: "Ride Bicycle for 15 Kilometers",
        id: 1,
        done: false,
        remove: false,
        time: new Date().toLocaleString(),
      },
      {
        text: "Watch today's Naruto episode",
        id: 2,
        done: false,
        remove: false,
        time: new Date().toLocaleString(),
      },
      {
        text: "Use Instagram for an hour",
        id: 3,
        done: false,
        remove: false,
        time: new Date().toLocaleString(),
      },
      {
        text: "Buy some fruits and milk",
        id: 4,
        done: false,
        remove: false,
        time: new Date().toLocaleString(),
      },
      {
        text: "Drop off package at post office",
        id: 5,
        done: false,
        remove: false,
        time: new Date().toLocaleString(),
      },
    ],
  };

  handleitem(item) {
    this.setState({ todoitems: [...this.state.todoitems, item] });
  }

  handleExchange = (text) => {
    const item = {
      id: this.state.todoitems.length + 1,
      text: text,
      done: false,
      remove: false,
      time: new Date().toLocaleString(),
    };
    this.setState({ todoitems: [...this.state.todoitems, item] });
  };

  handleDelete = (e) => {
    const key = +e.target.closest(".list-container").getAttribute("data-key");
    const todoitems = this.state.todoitems.filter((item) => {
      return item.id !== key;
    });
    this.setState({ todoitems: todoitems });
  };

  handleToggle = (e) => {
    if (e.target.value !== "") {
      this.setState({ toggle: true });
    } else {
      this.setState({ toggle: false });
    }
  };

  handleSearch = (e) => {
    this.setState({ searchValue: e.target.value });
    this.handleToggle(e);
  };

  render() {
    return (
      <div className="wrapper">
        <Search
          toggle={this.state.toggle}
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch}
        />
        <List
          todoitems={this.state.todoitems}
          toggle={this.state.toggle}
          handleDelete={this.handleDelete}
          searchValue={this.state.searchValue}
        />
        <Textarea
          handleExchange={this.handleExchange}
          toggle={this.state.toggle}
        />
      </div>
    );
  }
}

export default Functionality;
