import React from "react";
import { IFormProps } from '../types/data';



const Form = ({todos,inputText,status,setInputText,setStatus,setTodos}:IFormProps) => {

    const inputTextHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
      e.target.value && setInputText(e.target.value);
    };

    const submitTodoHandler:React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (inputText) {
          setTodos([
            ...todos, {text: inputText, completed: false, id: Math.floor(Math.random() * 1000) }
        ])
      }
        setInputText('');
    }

    const statusHandler:React.ChangeEventHandler<HTMLSelectElement> = (e) => {
      e.target.value && setStatus(e.target.value);
    };

  return (
    <form onSubmit={submitTodoHandler}>
      <input value={inputText} type="text" onChange={inputTextHandler}  className="todo-input" />
      <button   className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;