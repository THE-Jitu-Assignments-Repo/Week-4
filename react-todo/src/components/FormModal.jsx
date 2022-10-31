import React from 'react'
import "./style.css"


function FormModal({ handleChange, val, handleSubmit }) {
  return (
    <form className="modal-form">
      <label htmlFor="addtodo"> </label>
      <input
        type="text"
        name="title"
        placeholder="Add Task here?..."
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
}

export default FormModal