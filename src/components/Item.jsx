import React from "react";

import "../assets/css/Item.css";

const Item = ({ todo, completedHandler, deleteHandler }) => {
  return (
    <li className="todo__list--item">
      <span className={`info${todo?.completed ? ` completed` : ``}`}>{todo?.text}</span>
      <button onClick={() => completedHandler(todo)} className="complete-btn">✓</button>
      <button onClick={() => deleteHandler(todo?.id)} className="delete-btn">✕</button>
    </li>
  );
};

export default Item;
