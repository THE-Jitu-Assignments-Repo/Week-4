import React from "react";
import "./Add.css";

function AddTask({ setModal }) {
  return (
    <div className="add_form_modal">
      <section className="modal_content">
        <div className="form_head">
          <span>CREATE NEW TASK</span>
          <button onClick={() => setModal(false)} className='cancel'>x</button>
        </div>
        <form className="form_main_modal">
          <input type="text" name="task" className="task_input" placeholder="Write your task here..." autoFocus/>

          <fieldset className="radio--edit">
            <legend>Priority</legend>
            <input
              type="radio"
              name="priority"
            //   value="high"
            //   checked={val.priority === "high"}
            //   onChange={handleChanged}
            />{" "}
            <p htmlFor="priority" style={{color:'green'}}>High</p>
            <input
              type="radio"
              name="priority"
            //   value="medium"
            //   checked={val.priority === "medium"}
            //   onChange={handleChanged}
            />
            <p htmlFor="priority" style={{color:'orange'}}>Medium</p>
            <input
              type="radio"
              name="priority"
            //   value="low"
            //   checked={val.priority === "low"}
            //   onChange={handleChanged}
            />
            <p htmlFor="priority" style={{color:'red'}}>Low</p>
          </fieldset>
          <div className="button_form">
            <button>Add</button>
            <button onClick={() => setModal(false)} className='cancel'>Cancel</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddTask;
