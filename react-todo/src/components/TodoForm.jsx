import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import TodoList from "./TodoList";

const Modal = ({ handleChange, val, handleSubmit }) => {
  return (
    <form className="modal-form">
      <label htmlFor="addtodo">Add Todo: </label>
      <input
        type="text"
        name="title"
        placeholder="Whats your plan for the day?..."
        className="input--todo"
        onChange={handleChange}
        value={val.title}
      />

      <fieldset className="radio">
        <legend>Priority</legend>
        <input
          type="radio"
          name="priority"
          id=""
          value="high"
          checked={val.priority === "high"}
          onChange={handleChange}
        />{" "}
        <p htmlFor="priority">High</p>
        <input
          type="radio"
          name="priority"
          id=""
          value="medium"
          checked={val.priority === "medium"}
          onChange={handleChange}
        />
        <p htmlFor="priority">Medium</p>
        <input
          type="radio"
          name="priority"
          id=""
          value="low"
          checked={val.priority === "low"}
          onChange={handleChange}
        />
        <p htmlFor="priority">Low</p>
      </fieldset>

      <button className="btn-submit" onClick={handleSubmit}>
        &#10009; ADD TODO
      </button>
    </form>
  );
};

function TodoForm() {



  const [todos, setTodos] = useState([]);
  const [val, setVal] = useState({ title: "", priority: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setVal({
      ...val,
      [name]: value,
    });
  };


const [word, setWord] = useState("")

//

const filteredData = () => {
  // if (word === '') return todos;

  // if (todos.length > 0){
  //   const list = [];
  //   todos = todos.filter((item) => item.val.title.includes(word))
  //   console.log(todos)
  //   return todos;
  // }
  return todos;
}

// useEffect(() => {
//   setFilterData(() => {
//     const searchTodo = todos.filter((item)=> item.val.title.includes(word))
//      console.log(searchTodo);
//   })
// }, [word])

const [filterData, setFilterData] = useState(todos)
  const handleSearch = (event) => {
    setWord(event.target.value);
  };
//  console.log(todos);
//   console.log(filterData);
 

  function handleSubmit(event) {
    event.preventDefault();
    setVal({});
    setIsOpen(false);
    if (val !== "") {
      setTodos([{ id: `${val}-${Date.now()}`, val }, ...todos]);
    }
  }
 

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((Tid) => Tid.id !== id);

    setTodos([...deleteTodo]);
  };


  const handleEdit = (id) => {
    const editTodo = todos.find((me) => me.id === id);
    
    handleDelete(id)
    setIsOpen(true);
    setVal(editTodo.val);
  };

  //modal state
  const [isOpen, setIsOpen] = useState(false);



  return (
    <>
      <div className="form--head">
        <div className="search">
          <label htmlFor="seacrch">Search: </label>
          <input
            type="text"
            name="Seacrch"
            id=""
            onChange={handleSearch}
            placeholder="search todos..."
            className="seacrh"
          />
        </div>
        <span>TODO APP &#x2611;</span>
      </div>


      <div className="form">
        <span onClick={() => setIsOpen((prev) => !prev)}>
          Whats your plan for the day?...
        </span>
        {isOpen && (
          <Modal
            handleChange={handleChange}
            val={val}
            handleSubmit={handleSubmit}
            setIsOpen={setIsOpen}
          />
        )}
        <hr />
      </div>




      <div className="todos-list">
        <br />

        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          val={val}
        />
      </div>




    </>
  );
}

export default TodoForm;
