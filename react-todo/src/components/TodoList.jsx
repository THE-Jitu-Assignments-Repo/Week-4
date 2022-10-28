import React from 'react'
import "./style.css"
function TodoList({todos, handleDelete, handleEdit}) {
  return (
    <div>
    <ul className="todos-ul">
          {todos.map((todo) => (
            <li className="todo-li" key={todo.id}>
              <span>{todo.val.title}</span>
              <span>{todo.val.priority}</span>
              <div className="changeMe">
                <button onClick={()=>handleEdit(todo.id)}>&#x270E;Edit</button>
                <button onClick={()=>handleDelete(todo.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TodoList