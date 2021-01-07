import React from 'react'
import classes from './task.module.css'
import cross from './../img/closeCross.svg'
const Task = (props) => {
    return (
        <div>
            <div className={classes.task}>
                {props.message}
                <img src={cross} alt='close'/> 
            </div>

        </div>
    )
}

export default Task