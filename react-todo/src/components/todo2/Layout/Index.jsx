import React from "react";
import Header from "../Header/Header";
import Task from "../List/Task";
import AddTask from "../modals/AddTask";
import "./Index.css";

function Index({modal, setModal}) {

  const dummyTodos = [
{ id: 0, priority: true, text: 'make components' },
{ id: 1, priority: false, text: 'design actions' },
{ id: 2, priority: false, text: 'implement reducer' },
{ id: 3, priority: false, text: 'connect components' }
];
  return (
    <div className="main-div">
      <div className="content">
        <Header />
        <hr
          style={{
            marginTop: "12px",
            marginBottom: "12px",
            backgroundColor: "rgb(24, 120, 246)",
          }}
        />
        <div className="content_head_tag">
          <span>
            Do you have a Task in mind? Click on the Add button below...{" "}
          </span>
          <button className="task_button" onClick={()=>setModal(!modal)}>ADD TASK HERE!</button>
          {modal && <AddTask setModal={setModal}/>}
        </div>
        <div className="task_tag">
          <span>Your Tasks..</span>
        </div>
        <section>
          <div className="task--list">
            <h3>Task</h3>
            <h3>Priority</h3>
            <h3>Status</h3>
          </div>
          {dummyTodos.map(item=>{
            return <Task key={item.id} item={item}/>
          })}
        </section>
      </div>
    </div>
  );
}

export default Index;
