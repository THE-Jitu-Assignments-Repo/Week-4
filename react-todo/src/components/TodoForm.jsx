import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import TodoList from "./TodoList";
import FormModal from "./FormModal";
import Search from "./Search";

function TodoForm() {
  // const todos = [];
  const [todos, setTodos] = useState([]);
  const [searchedWord, setSearchedWord] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [val, setVal] = useState({
    id:0,
    title: "",
    priority: "",
  });
  //modal state
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setVal((val) => ({
      ...val,
      [name]: value,
      id: Math.floor(Math.random() * 1000)
    }));
  };



  function handleSubmit(event) {
    event.preventDefault();
    setIsOpen(false);
    if (val !== "") {
      setTodos([val, ...todos]);
      // localStorage.setItem([val, ...todos])
    }
    setVal({});
  }

  const closeModal = () => {
    setEditOpen(false);
  };

  function handleUpdate(event) {
    event.preventDefault();

    setVal({});
    closeModal();
    if (val !== "") {
      setTodos([val, ...todos]);
    };
  }

  const newData = todos;

  const [filteredData, setFilteredData] = useState(newData);

  const handleSearch = (event) => {
    const resultTodos = todos.filter(
      (todo) =>
        todo.title.includes(event.target.value) ||
        todo.priority.includes(event.target.value)
    );
  };

 
  const handleDelete = (id) => {
    const deleteTodo = todos.filter((Tid) => Tid.id !== id);
    setTodos([...deleteTodo]);
  };

  
  

  return (
    <>
      <Search
        handleSearch={handleSearch}
        onChange={(e) => setSearchedWord(e.target.value)}
      />

      <div className="form">
        <span onClick={() => setIsOpen((prev) => !prev)}>
          Whats your plan for the day?... <button>Click ME!</button>
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
          filteredData={filteredData}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          val={val}
          closeModal={closeModal}
          setVal={setVal}
          sendTodo={updateTodo}
          setIsOPen={setIsOpen}
          editOpen={editOpen}
          setEditOpen={setEditOpen}
        />
      </div>
    </>
  );
}

export default TodoForm;
