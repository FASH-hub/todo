import React, { useState } from 'react'

export default function TodoForm(props) {

    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleTodo = (e) => {

        e.preventDefault();
        props.addTask({
            id: Math.floor(Math.random() * 1000),
            text: input,
            isCompleted: false

        })
        setInput('')
    }


    return <form className="w-full max-w-sm ml-9">
        <div class="flex items-center border-b border-cyan-500 py-2">
            <input type="text" placeholder="Enter your todo here" onChange={handleChange} value={input} class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="todo"></input>
            <button type="submit" onClick={handleTodo} class="flex-shrink-0 bg-cyan-500 hover:bg-cyan-500 border-cyan-500 hover:border-cyan-500 text-sm border-4 text-white py-1 px-2 rounded">Add todo</button>
        </div>
    </form>

}