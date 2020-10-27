// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'

import Todo from './Todo'

const TodoList = props => {

        const handleClick = () => {
            props.clearItems()
        }
    
        return (
            <div className='todo-list'>
                {props.tasks.map(task => (
                    <Todo handleToggleItem={props.handleToggleItem}key={task.id} task={task}/>
                ))}
                <button onClick={handleClick} className='clear-btn'>
                    Clear</button>
            </div>
        )
    }

export default TodoList