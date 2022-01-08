import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodoList, setFilteredTodoList] = useState([]);

  useEffect(() => {
    switch (status) {
      case 'completed':
        setFilteredTodoList(todoList.filter(elem => elem.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodoList(todoList.filter(elem => elem.completed === false));
        break;
      default:
        setFilteredTodoList(todoList);
    }
  }, [todoList, status]);

  const completedHandler = (todo) => {
    setTodoList(prevState => prevState.map(elem => {
      if (elem.id === todo.id) {
        return { ...elem, completed: !todo.completed };
      }
      return elem;
    }));
  };

  const deleteHandler = (id) => {
    setTodoList(prevState => prevState.filter(elem => elem.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form
        todoList={todoList}
        setTodoList={setTodoList}
        setStatus={setStatus} />
      <TodoList
        deleteHandler={deleteHandler}
        completedHandler={completedHandler}
        filteredTodoList={filteredTodoList} />
    </div>
  );
}

export default App;
