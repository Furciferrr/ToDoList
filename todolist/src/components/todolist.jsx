import React, { useState } from 'react'
import Task from './Task'
import classes from './todolist.module.css'

const ToDo = (props) => {
    
    const [task, chengeTask] = useState('')
    

    const onChenge = (e) => {
        chengeTask(e.currentTarget.value)
    }

    const onEditMode = (e) => {
        let id = +e.currentTarget.attributes.id.value
        props.setEditTaskIdAC(id)
        let editTask = props.tasks.filter(task => task.id === id)
        chengeTask(editTask[0].message)
        props.editModeAC ()
    }

    const saveChenges = () => {
        props.editModeAC ()
        props.setChengesAC(task)
        chengeTask('')
    }

    const mapTasks = (task) => {
        return <Task key={task.id} id={task.id}
        message={task.message}
        checked={task.checked}
        removeTask={props.removeTaskAC} 
        complet={props.completAC}
        editMode={props.editMode}
        onEditMode={onEditMode}/>
    }

    const filtrTasks = () => {
        if (props.showOnlychecked) {
          return props.tasks.filter(task => task.checked)
                .map( task => mapTasks (task))
        } else if (props.showOnlyActive) {
           return props.tasks.filter(task => !task.checked)
            	.map( task => mapTasks (task))
        } else {
           return props.tasks
                .map(task => mapTasks (task))
        }
    }


    return (
        <div className={classes.mainWrapper}>
            <div className={classes.inputWrapper}>
                <h3>My To Do List</h3>
                <input type='input' value={task} onChange={onChenge}  maxLength="30"
                placeholder={props.tasks.length > 1 ? 'I want more tasks' : 'give me your tasks'}></input>
                {!props.editMode ? <button onClick={()=> {
                    props.addTaskAC(task)
                    chengeTask('')
                }}>Add</button> :
                <button onClick={()=> {
                   saveChenges ()
                }}>Save</button> }
            </div>

            <div className={classes.taskWrapper}>
            { filtrTasks ()
            /* props.showOnlychecked ? props.tasks.filter(task => task.checked)
            	.map( task => mapTasks (task))
            	 : props.tasks
                .map(task => mapTasks (task)) */
            }
            </div> 

            <div className={classes.footer}>
            <button onClick={props.checkedTaskAC} >{props.showOnlychecked ? 'Show all task' : 'Completed'}</button>  
            <button onClick={props.showOnlyActiveAC} >{props.showOnlyActive ? 'Show all task' : 'Active'}</button>  

            </div>
             
        </div>
    )
}

export default ToDo