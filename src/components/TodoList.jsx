import TodoForm from './TodoForm'

import React, { useState } from 'react'

export default function TodoList() {

    const [todos, setTodos] = useState([])


    const addTask = task => {
        if (!task.text) {
            return
        }
        const newTodos = [task, ...todos]
        setTodos(newTodos)
    }



    return <TodoForm addTask={addTask}></TodoForm>
}