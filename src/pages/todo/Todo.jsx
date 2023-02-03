import React, { useState, useEffect } from 'react'
import Button from '../../components/button/Button'

import { FcAddDatabase, FcEmptyTrash, FcCheckmark, FcNext } from "react-icons/fc";


// styles
import './Todo.scss'
/* 
- Todo (done)
- a list of todos (done)
- add todo (done)
- delete todo (done)

- updatede todo
- todo marked when done
- search todos ? 

- localstorage ? (done, set, get and remove)

- todo form (no form just inputs)
- functions (add, delete)

*/


// function todo
const addTodo = (todo, setInput, todoList, setTodoList) => {
    const newTodo = {
        id: Math.random() * 1000,
        todo: todo,
    }

    // adding new todo to list of todos usins spread operator
    setTodoList([...todoList, newTodo])
    // clearing input field
    setInput("")

    localStorage.setItem("todos", JSON.stringify([...todoList, newTodo]));
}

const deleteTodo = (id, todoList, setTodoList) => {    
    // so if the todo id is not equal the id passed in, then it will be removed from the list
    const updatedList = todoList.filter((todo) => todo.id !== id)

    setTodoList(updatedList)

    localStorage.removeItem("todos", JSON.stringify(id));
}

export const Todo = () => {
    const [todoList, setTodoList] = useState([])
    const [input, setInput] = useState("")

    console.log(todoList)

    const handleOnChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
        console.log(e.target.value)
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if (todos) {
         setTodoList([...todos]);
        } else {
            setTodoList([])
        }
    }, [])
    

  return (
      <div>
          <h1>MY TODOS</h1>
          <div className="add_todo_wrapper">
          <input
              type="text"
                  value={input}
                  placeholder='Add todo'
              onChange={(e) => handleOnChange(e)}
          />
          <Button variant='todo_btn' onClick={() => addTodo(input, setInput, todoList, setTodoList)}><FcAddDatabase /></Button>
              
          </div>

          <ul className='todo_list'>
              {todoList.length > 0 && todoList.map(t => (
                  <li key={t.id}>
                    <FcNext />
                  <p>{t.todo}</p>
                  <Button onClick={() => deleteTodo(t.id, todoList, setTodoList)}><FcEmptyTrash /></Button>
                  </li>
              ))}
          </ul>
    </div>
  )
}
