import React, { Component } from "react";
import taskicon from "./task-icon.png";

function Header() {
  return (
    <div className="title-bar">
      <img src={taskicon} alt="Task Logo" />
      <h1>To-Do-List-App</h1>
    </div>
  );
}

export default Header;
