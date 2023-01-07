import React from "react";
import Header from "../Header/Header";
import "./Index.css";

function Index() {
  return (
    <div className="main-div">
      <div className="content">
        <Header />
        <hr style={{ marginTop: "12px", marginBottom: "12px" }} />
        <div className="content_head_tag">
          <span>
            Do you have a Task in mind? Click on the Add button below...{" "}
          </span>
          <button className="task_button">ADD TASK HERE!</button>
        </div>
      </div>
    </div>
  );
}

export default Index;
