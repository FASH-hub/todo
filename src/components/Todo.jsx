import React from 'react'


export default function Todo({ todos, isCompleted, removeTask }) {



    return todos.map((todo, index) => (
        <div className={todo.isCompleted ? 'complete task-div' : 'task-div'} key={index}>
            <div className="flex ml-4">{todo.text}

                <button onClick={() => { removeTask(todo.id) }} className="px-4">×</button>
                <input onClick={() => { isCompleted(todo.id) }} className="px-4" type="checkbox" defaultChecked={`${todo.isCompleted ? "checked" : ""}`} />
            </div>
        </div>
    ));
}
