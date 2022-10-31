import React from "react";
import TodoForm from "./TodoForm";
import "./style.css";

function Todo() {
  return (
    <div className="todo--app">
      <div className="todo--app--content">
        <TodoForm />
      </div>
    </div>
  );
}

export default Todo;
