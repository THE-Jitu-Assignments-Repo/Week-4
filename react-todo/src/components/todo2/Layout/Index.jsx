import React from "react";
import Header from "../Header/Header";
import AddTask from "../modals/AddTask";
import "./Index.css";

function Index({modal, setModal}) {
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
        <section>{/* <span>tasks list</span> */}</section>
      </div>
    </div>
  );
}

export default Index;
