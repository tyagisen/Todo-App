import React from "react";

export const TodoItem = ({ x,  onDelete }) => {
    let myDataStyle = {
        width: "45%",
        margin:"0 auto"
    }
  return (
    <div style={myDataStyle}>
      <div className="card w-75 my-3">
        <div className="card-body">
          <h3 className="card-title">{x.todo}</h3>
          <p className="card-text">{x.desc}</p>
          <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(x)}}>Delete</button>
        </div>
      </div>
    </div>
  );
};
