import React, {useState} from 'react';
import '../assets/styles/TodoItem.css';

const TodoItem = ({id, task, completed, toggleTodo, deleteTodo, updateTodo}) => {

    const [isEditing, setIsEditing] = useState(false)
    const [editTask, setEditTask] = useState(task)

    const handleUpdate = (e) => {
        e.preventDefault()

        const editedTask = editTask.trim()

        if (editedTask !== '') {
           updateTodo(id, editTask)
        setIsEditing(false) 
        }
    }

    return (
        <div className={completed ? 'Todo completed' : 'Todo'}>
            {
                isEditing ? (
                    <div className="form">
                        <form className="Todo-edit-form" onSubmit={handleUpdate}>
                            <input
                                name="task"
                                placeholder="Edit a task"
                                type="text"
                                value={editTask}
                                onChange={(e) => setEditTask(e.target.value)}
                            />
                            <button>Save</button>
                        </form>
                    </div>
                ) 
                : (
                    <div className="task-text">
                        <li className="Todo-task" onClick={toggleTodo}>
                            {task}
                        </li>
                    </div>
                )
            }
            <div className="Todo-buttons">
                <button onClick={() => setIsEditing(true)}>
                    <i className="fas fa-pen" />
                </button>
                <button onClick={deleteTodo}>
                    <i className="fas fa-trash" />
                </button>
            </div>
        </div>
    )
}

export default TodoItem
