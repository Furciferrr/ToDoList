import React, { useState } from 'react'
import Task from './Task'
import { addTaskAC } from './task-reducer'
import classes from './todolist.module.css'

const ToDo = (props) => {
    const [task, chengeTask] = useState('')
    

    const onChenge = (e) => {
        chengeTask(e.currentTarget.value)
    }

    const saveTask = () => {
        props.addTask(addTaskAC(task))
        chengeTask('')
    }



    return (
        <div className={classes.mainWrapper}>
            <div className={classes.inputWrapper}>
                <h3>My To Do List</h3>
                <input type='input' value={task} onChange={onChenge} ></input>
                <button onClick={saveTask}>Add</button>
            </div>
            <div className={classes.taskWrapper}>
            {props.tasks
                .map(task => <Task key={task.id} id={task.id}
                    message={task.message}
                    checked={task.checked}
                    removeTask={props.removeTask} />
                )}
            </div>    
        </div>
    )
}

export default ToDo