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
    id: Math.floor(Math.random() * 1000),
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
    }));
  };
  const [test, setTest] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setVal({});
    setIsOpen(false);
    if (val !== "") {
      setTodos([val, ...todos]);
      setTest(todos);
    }
  }

  const closeModal = () => {
    setEditOpen(false);
  };

  function handleUpdate(event) {
    event.preventDefault();

    setVal({});
    closeModal();

    setTodos([val])
    if (val !== "") {
      setTodos([val, ...todos]);

    };
  }

  const newData = todos;

  const [filteredData, setFilteredData] = useState(newData);

  const handleSearch = (event) => {
    // if (!event.target.value) return setTodos(todos);

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

  const updateTodo = (id, val) => {
    //  const index= todos.findIndex(item=> item.id ===id)
    //  console.log(index);
    //  console.log(id);
  };

  console.log(filteredData);

  return (
    <>
      <Search
        handleSearch={handleSearch}
        onChange={(e) => setSearchedWord(e.target.value)}
      />

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
