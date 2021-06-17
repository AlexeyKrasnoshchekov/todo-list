import React from "react";


const Form = (props) => {

    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        // console.log('1111', );
        let todos = props.todos;
        e.target.value && props.setTodos([
            ...todos, {text: props.inputText, completed: false, id: Math.floor(Math.random() * 1000) }
        ])

        props.setInputText('');
    }

    const statusHandler = (e) => {
        props.setStatus(e.target.value);
    };

  return (
    <form >
        {/* value={props.inputText} очищает инпут после сабмита, так как по умолчанию пусто*/}
      <input value={props.inputText} type="text" onChange={inputTextHandler}  className="todo-input" />
      <button onClick={submitTodoHandler}  className="todo-button" type="submit">
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