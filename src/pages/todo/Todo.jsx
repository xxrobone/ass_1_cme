import React, { useState } from 'react'
import Button from '../../components/button/Button'

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

  return (
      <div>
          <h1>MY TODOS</h1>
          <input
              type="text"
              value={input}
              onChange={(e) => handleOnChange(e)}
          />
          <Button variant='todo' onClick={() => addTodo(input, setInput, todoList, setTodoList)}>Add</Button>

          <div className='todo_list'>
              {todoList.map(t => (
                  <p key={t.id}>{t.todo}</p>
              ))}
          </div>
    </div>
  )
}
