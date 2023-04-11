import React from "react";
import { ITodoListProps } from "../types/data.js";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }:ITodoListProps) => {


  // console.log('filteredTodos', filteredTodos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        
          {filteredTodos.map(todo => (
              <Todo 
                text={todo.text} 
                key={todo.id} 
                todos={todos} 
                todo={todo} 
                setTodos={setTodos}
              />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
