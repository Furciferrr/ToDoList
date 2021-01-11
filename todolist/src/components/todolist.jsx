import React, { useState } from 'react'
import Task from './Task'
import classes from './todolist.module.css'

const ToDo = (props) => {
    const [task, chengeTask] = useState('')
    

    const onChenge = (e) => {
        chengeTask(e.currentTarget.value)
    }

    const mapTasks = (task) => {
        return <Task key={task.id} id={task.id}
        message={task.message}
        checked={task.checked}
        removeTask={props.removeTask} 
        onCheck={props.onCheck}/>
    }


    return (
        <div className={classes.mainWrapper}>
            <div className={classes.inputWrapper}>
                <h3>My To Do List</h3>
                <input type='input' value={task} onChange={onChenge}  maxLength="30"
                placeholder={props.tasks.length > 1 ? 'I want more tasks' : 'give me your tasks'}></input>
                <button onClick={()=> {
                    props.saveTask(task)
                    chengeTask('')
                }}>Add</button>
            </div>

            <div className={classes.taskWrapper}>
            { props.showOnlychecked ? props.tasks.filter(task => task.checked)
            	.map( task => mapTasks (task))
            	 : props.tasks
                .map(task => mapTasks (task))}
            </div> 

            <div className={classes.footer}>
            <button onClick={props.viewChecked} >{props.showOnlychecked ? 'Show all task' : 'checked task'}</button>  
            </div>
             
        </div>
    )
}

export default ToDo