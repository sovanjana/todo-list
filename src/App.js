import React, { useState,useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status,setStatus]=useState('all');
  const [filteredTodoList,setFilteredTodoList]=useState([]);

  useEffect(()=>{
    switch(status){
      case 'completed':
        setFilteredTodoList(todoList.filter(elem=>elem.completed===true))
        break;
      case 'uncompleted':
        setFilteredTodoList(todoList.filter(elem=>elem.completed===false));
        break;
      default:
        setFilteredTodoList(todoList);
    }
  },[todoList,status]);
  const completedHandler = (todo) => {
    // setTodoList(
    //   todoList.map((elem) => {
    //     if (elem.id === todo.id) {
    //       return { ...elem, completed: !todo.completed };
    //     }
    //     return elem;
    //   })
    // );
    console.log(todo);
  
  };
  const deleteHandler = (id) => {
    setTodoList(todoList.filter((elem) => elem.id !== id));
    console.log(id);
  };

  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form
        
        todoList={todoList}
        
        setTodoList={setTodoList}
        setStatus={setStatus}
      />
      <TodoList deleteHandler={deleteHandler} completedHandler={completedHandler}filteredTodoList={filteredTodoList} todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
