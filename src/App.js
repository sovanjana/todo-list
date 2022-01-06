import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText,setInputText]=useState("");
  const [todoList,setTodoList]=useState([]);
  console.log(inputText ,todoList)
  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form todoList={todoList} setInputText={setInputText} setTodoList={setTodoList}/>
      <TodoList/>
    </div>
  );
}

export default App;
