import React from 'react';
import '../assets/styles/TodoList.css';
import {useSelector, useDispatch} from 'react-redux';
import {completeTodo, addTodo, deleteTodo, updateTodo} from '../redux/action'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoList = () => {

    const state = useSelector(state => ({...state.todos}))
    const dispatch = useDispatch()

    const createNewTodo = (newTodo) => {
        dispatch(addTodo(newTodo))
    }

    const update = (id, updatedTask) => {
        dispatch(updateTodo({id, updatedTask}))
    }

    return (
        <div className="TodoList">
            <h2>WELCOME!</h2>
            <h3>Add a new task</h3>
            <TodoInput createTodo={createNewTodo} />
            <ul>
                {
                    state.todos && 
                    state.todos.map((todo) => {
                        return (
                            <div key={todo.id} className="todo-divst">
                                <TodoItem 
                                    key={todo.id}
                                    id={todo.id}
                                    task={todo.task}
                                    completed={todo.completed}
                                    toggleTodo={() => dispatch(completeTodo(todo))}
                                    deleteTodo={() => dispatch(deleteTodo(todo))}
                                    updateTodo={update}
                                />
                            </div>
                            )
                        })
                    }
            </ul>
        </div>
    )
}

export default TodoList