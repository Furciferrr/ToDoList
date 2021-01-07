import React, { useState } from 'react'
import Task from './Task'


const ToDo = (props) => {
    const [task, addTask] = useState()
    const onChenge = (e) => {
        addTask(e.currentTarget.value)
    }

    const saveTask = () =>{
       console.log(task)
       addTask('')

    }


    return (
        <div>
            <input type='input' value={task} onChange={onChenge} ></input>
            <button onClick={ () => {
                saveTask()
            }}>Add</button>
            {props.tasks
            .map( task => <Task key={task.id} message={task.message}/>
            )}
        </div>
    )
}

export default ToDo