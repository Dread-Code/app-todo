import React, { useReducer } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { CardComponent } from "./components/Card/Card";
import TodoContext from "./context/TodoContext";

const todoReducer = (state = [], action) => {
  switch (action?.type) {
    case "add":
      return [...state, action.payload];

    case "end":
      return state.filter((todo, index) => index !== action.payload);
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="app">
        <h1>Todo App</h1>
        <AddTodo />
        <br />
        <CardComponent />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
