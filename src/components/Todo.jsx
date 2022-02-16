import React from 'react'



export default function Todo({ todos, isCompleted, removeTask }) {



    return todos.map((todo, index) => (
        <div className="border-solid border-2 ml-9 mt-4 max-w-sm">

            <div className={todo.isCompleted ? "line-through" : ""} key={index}>
                <li className="flex ml-4 p-4 mt-2 ">{todo.text}
                    <button className="ml-2 bg-red-900 text-white w-5 h-5" onClick={() => { removeTask(todo.id) }}>X</button>
                    <input className="ml-2 w-7 h-5" onClick={() => { isCompleted(todo.id) }} type="checkbox" defaultChecked={`${todo.isCompleted ? "checked" : ""}`} />
                </li>
            </div>
        </div>
    ));
}
