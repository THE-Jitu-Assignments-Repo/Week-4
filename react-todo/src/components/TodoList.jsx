import React from "react";
import { useState } from "react";
import Edit from "./Edit"
import "./style.css";

function TodoList({ todos, handleDelete, val, sendTodo, setIsOPen, setVal}) {
  const [editOpen, setEditOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((me) => me.id === id);
    // handleDelete(id);
    setIsOPen(false)
    setEditOpen(true)
    setVal(editTodo);
  };

  const receiveTodos=(id,val)=>{
    sendTodo(id,val)

  }
console.log(todos);
  return (
    <div>
      <ul className="todos-ul">
        {todos.map((todo) => (
          <li className="todo-li" key={todo.id}>
            <span>{todo.title}</span>
            <span>{todo.priority}</span>
            <div className="changeMe">
              <button onClick={() => handleEdit(todo.id)}>
                &#x270E;Edit
              </button>
              {editOpen && (
                <Edit
                  handleChange={handleChange}
                  handleEdit={handleEdit}
                  val={val}
                  setTodos={receiveTodos}
                  todos={todos}
                  id={todo.id}
                  setVal={setVal}
                  closeModal={() => setEditOpen(false)}
                />
              )}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
