import React from 'react'
import "./Form.css"
const Form = ({setInputText,setTodoList}) => {
  const inputTextHandler=(e)=>{
    setInputText(e.target.value);
  }
  const submitButtonHandler=(e)=>{
    e.preventDefault();
    setTodoList((prev)=>[...prev,e.target.value])
  
  }
  

  return (
    <div className='form'>
      <form>
        <input onChange={inputTextHandler} type="text" />
        <button onClick={submitButtonHandler} type="submit">
          +
        </button>
        <div className='select'>
          <select name="todos" className='filter__todo'>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      
    </div>
  )
}

export default Form
