import React from "react";
import "./style.css";

function Edit({
  handleChange,
  val,
  closeModal,
  id,
  setTodos,
  setVal,
}) {


  function handleUpdate(event) {
    event.preventDefault();
    setVal({});
    closeModal();
    if (val !== "") {
      setTodos(val);
    }
  }



  return (
    <>
      <div className="edit-modal">
        <div className="form-edit">
          <form className="edit--form" onSubmit={handleUpdate}>
            <label htmlFor="addtodo">Edit Todo: </label>
            <input
              type="text"
              name="title"
              placeholder="Edit Task here?..."
              className="input--todo"
              onChange={handleChange}
              value={val.title}
            />

            <fieldset className="radio--edit">
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
            
            <button  className="btn-update">EDIT</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;
