import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form.js";
import TodoList from "./components/toDoList.js";

function App() {
  //state

  //поле ввода и его сохранение в стейт
  const [inputText, setInputText] = useState("");
  //список дел и его сохранение в стейт
  const [todos, setTodos] = useState([]);
  //статус дел и его сохранение в стейт
  const [status, setStatus] = useState("all");
  //дела после фильтра
  const [filteredTodos, setfilteredTodos] = useState([]);

 
  

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setfilteredTodos(todos);
        break;
    }
  };

  // localStorage functions
  //save to Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // get from Local
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

   //useEffect
  //run once when start, берет дела из localStorage
  useEffect(() => {
    getLocalTodos();
  }, []);

// запуск функций после каждого изменения массива todos или статуса
  useEffect(() => {
    filterHandler();  // запуск фильтра
    saveLocalTodos(); // сохранение в localStorage
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>To do list 333</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
