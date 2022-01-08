import React from "react";
import Item from "./Item";

import "../assets/css/TodoList.css";

const TodoList = ({ filteredTodoList, ...rest }) => {
  return (
    <div className="todoList">
      <div className="todo__container">
        <ul className="todo__list">
          {filteredTodoList.map((item) => (
            <Item key={item.id} todo={item} {...rest} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
