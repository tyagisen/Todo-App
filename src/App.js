import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("my_todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("my_todos"));
  }

  const onDelete = (one) => {
    console.log("I am delete", one);
    // let index = one.indexOf(one);
    // my_todos.splice(index,1);
    setTodos(
      my_todos.filter((e) => {
        return e !== one;
      })
    );
    localStorage.getItem("my_todos");
  };
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sn;
    if (my_todos.length === 0) {
      sn = 0;
    } else {
      let sn = my_todos[my_todos.length - 1].sn + 1;
    }
    const myTodo = {
      sn: sn,
      todo: title,
      desc: desc,
    };
    setTodos([...my_todos, myTodo]);
    localStorage.setItem("my_todos", JSON.stringify(my_todos));
  };
  const [my_todos, setTodos] = useState(initTodo);

  return (
    <Router>
      <Header title="My Todos List" searchBar={true} />
      <Switch>
        <Route
          path="/" exact
          render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos one={my_todos} onDelete={onDelete} />
              </>
            );
          }}
        ></Route>
        <Route path="/about" exact render={()=>{
          return(
            <>
            <About/>
            </>
          )
        }}>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
