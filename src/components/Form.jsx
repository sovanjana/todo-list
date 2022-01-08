import React, { useState } from "react";

import "../assets/css/Form.css";

const Form = ({ setTodoList, todoList, setStatus }) => {
  const [inputText, setInputText] = useState("");

  const submitButtonHandler = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText("");
  };

  const selectHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="form">
      <form>
        <input value={inputText} onChange={e => setInputText(e.target.value)} type="text" />
        <button onClick={submitButtonHandler} type="submit">+</button>
        <div className="select">
          <select onChange={selectHandler} name="todos" className="filter__todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
