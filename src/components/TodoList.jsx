import TodoForm from './TodoForm'
import Todo from './Todo'

import React, { useState } from 'react'

export default function TodoList() {

    /**
     * State array that contains all the todos
     */
    const [todos, setTodos] = useState([])


    /**
     * Adds tasks to do to list
     * @param {params} task task to add to list
     * @returns null
     */
    const addTask = task => {
        if (!task.text) {
            return
        }
        const newTodos = [task, ...todos]
        setTodos(newTodos)
    }




    /**
     * Remove the specified tasks
     * @param {integer} id id of task to remove
     */
    const removeTask = id => {

        let sortedTasks = [...todos].filter(task => task.id !== id)
        setTodos(sortedTasks)
    }




    /**
     * Checks if a specified task has been executed
     * @param {integer} id id of task to be checked
     */
    const isCompleted = id => {
        let updatedTasks = todos.map(task => {
            if (task.id === id) {
                task.isCompleted = true;
            }
            return task;
        })
        setTodos(updatedTasks);
    }




    return <div>
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} isCompleted={isCompleted} removeTask={removeTask}></Todo>
    </div>
}