import React from "react";
import "./style.css";

function Edit({
  val,
  closeModal,
  setTodos,
  setVal,
  handleUpdate
}) {


  // function handleUpdate(event) {
  //   event.preventDefault();
  //   setVal({});
  //   closeModal();
  //   if (val !== "") {
  //     setTodos(val);
  //   }
  // }

const handleChange = (event) => {
    const { name, value } = event.target;

    setVal({
      ...val,
      [name]: value,
      id: Math.floor(Math.random()*1000)
    });
  };

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
              autoFocus
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
