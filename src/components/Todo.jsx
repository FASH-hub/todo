import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti'


export default function Todo({ todos, isCompleted, removeTask }) {



    return todos.map((todo, index) => (

        <div className={todo.isCompleted ? 'complete task-div' : 'task-div'} key={index}>
            <li className="flex ml-4 p-4 mt-10">{todo.text}
                <TiTick className="ml-2" onClick={() => { isCompleted(todo.id) }}></TiTick>
                <RiCloseCircleLine className="ml-2" onClick={() => { removeTask(todo.id) }}></RiCloseCircleLine>
            </li>
        </div>
    ));
}
