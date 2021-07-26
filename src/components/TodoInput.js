import React, {useState} from 'react';
import '../assets/styles/TodoInput.css';

const TodoInput = ({createTodo}) => {

    const [task, setTask] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const newTask = task.trim()

        if (newTask !== '') {
            createTodo(newTask)
            setTask('')
        }
    }

    return (
        <form className="TodoInput" onSubmit={handleSubmit}>
            <input
                id="task"
                name="task"
                placeholder="Enter a task"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoInput
