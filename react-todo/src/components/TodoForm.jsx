import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import TodoList from "./TodoList";
import FormModal from "./FormModal";
import Search from "./Search";

function TodoForm() {
  const [todos, setTodos] = useState([]);
  const [val, setVal] = useState({ id: 0,title: "", priority: "" });
  //modal state
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setVal({
      ...val,
      [name]: value,
      id: Math.floor(Math.random()*1000)
    });
  };

  
const [filteredData, setFilteredData] = useState("")


  const handleSearch = (event) => {
    if (!event.target.value) return setTodos(todos);

    const resultTodos = todos.filter(
      (todo) =>
        todo.title.includes(event.target.value) ||
        todo.priority.includes(event.target.value)
    );

    if (event.target.value === "") {
      setFilteredData(todos);
    } else {
      setFilteredData(resultTodos);
    }
  };


  

  function handleSubmit(event) {
    event.preventDefault();
    setVal({});
    console.log(val); 
    setIsOpen(false);
    if (val !== "") {
      setTodos([ val , ...todos]);
    }
  }

  const handleDelete = (id) => {
   
    const deleteTodo = todos.filter((Tid) => Tid.id !== id);

    setTodos([...deleteTodo]);
  };
  const updateTodo=(id,val)=>{
    //  const index= todos.findIndex(item=> item.id ===id)
    //  console.log(index);
    //  console.log(id);
  }



  return (
    <>
      <Search handleSearch={handleSearch} />

      <div className="form">
        <span onClick={() => setIsOpen((prev) => !prev)}>
          Whats your plan for the day?...
        </span>

        {isOpen && (
          <FormModal
            handleChange={handleChange}
            val={val}
            handleSubmit={handleSubmit}
          />
        )}

        <hr />
      </div>

      <div className="todos-list">
        <br />

        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          val={val}
          setVal={setVal}
          sendTodo={updateTodo}
          setIsOPen={setIsOpen}
        />
      </div>
    </>
  );
}

export default TodoForm;
