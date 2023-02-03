import React, { useState, useEffect } from 'react'
import Button from '../../components/button/Button'


// styles
import './Todo.scss'
/* 
- Todo
- a list of todos
- add todo
- delete todo
- updatede todo
- search todos ? 

- todo form
- functions

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
          <input
              type="text"
              value={input}
              onChange={(e) => handleOnChange(e)}
          />
          <Button variant='todo' onClick={() => addTodo(input, setInput, todoList, setTodoList)}>Add</Button>

          <ul className='todo_list'>
              {todoList.length > 0 && todoList.map(t => (
                  <li key={t.id}>
                  <p>{t.todo}</p>
                  <Button onClick={() => deleteTodo(t.id, todoList, setTodoList)}>&times;</Button>
                  </li>
              ))}
          </ul>
    </div>
  )
}
