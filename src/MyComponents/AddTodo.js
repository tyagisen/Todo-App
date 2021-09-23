import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Title and Desc Required")
    }
    else{
    props.addTodo(title, desc)
    setTitle("");
    setDesc("");
  }
  }
  let myForm = {
    width: "45%",
    margin: "0 auto",
    padding: "15px",
    // border:'1px solid black',
    borderRadius: "5px",
    boxShadow: "0px 0px 5px #00000030",
  };
  return (
    <div className="container mt-3">
      <form style={myForm}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Todo
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Add Todo" value={title} onChange = {(e)=>{setTitle(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Description"
            resize="none" value={desc}
            onChange = {(e) => {setDesc(e.target.value)}}
          ></textarea>
        </div>
        <button type="submit" onClick={submit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
