import React from "react";
import Item from "./Item";
import "./TodoList.css";

const TodoList = ({ todoList, setTodoList,filteredTodoList,completedHandler,deleteHandler }) => {
  return (
    <div className="todoList">
      <div className="todo__container">
        <ul className="todo__list">
          {filteredTodoList.map((item) => (
            <Item
              todo={item}
              key={item.id}
              text={item.text}
              todoList={todoList}
              setTodoList={setTodoList}
              completedHandler={completedHandler}
              deleteHandler={deleteHandler}
              

            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
