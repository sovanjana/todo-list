import React from "react";
import "./Item.css";

const Item = ({ text, todo, todoList, setTodoList,completedHandler,deleteHandler }) => {
  // const completedHandler = () => {
  //   setTodoList(
  //     todoList.map((elem) => {
  //       if (elem.id === todo.id) {
  //         return { ...elem, completed: !todo.completed };
  //       }
  //       return elem;
  //     })
  //   );
  // };
  // const deleteHandler = () => {
  //   setTodoList(todoList.filter((elem) => elem.id !== todo.id));
  //   // console.log(todo);
  // };
  // console.log(todoList);
  return (
    <div className="item">
      <li className="info">{text}</li>
      <button onClick={()=>completedHandler(todo)} className="complete-btn">
        ✔
      </button>
      <button onClick={()=>deleteHandler(todo.id)} className="delete-btn">
        ❌
      </button>
    </div>
  );
};

export default Item;
