import React, { useState } from 'react'
import classes from './task.module.css'
import cross from './../img/closeCross.svg'


const Task = (props) => {
    const removeItem = (e) => {
        const id = e.currentTarget.attributes.id.value
        props.removeTask(+id)
    }

    const [check, onChecked] = useState(false)
    const onCheck = () => {
        check ? onChecked(false) : onChecked(true)
    }

    return (
        <div className={classes.taskWrap}>
            <div onClick={onCheck} className={classes.message}>{props.message}</div>
            <div className={classes.imgWrap}>
                <img onClick={ (e) => {
                    removeItem (e)
                } } src={cross} id={props.id} alt='close'/> 
            </div>
        </div>
    )
}

export default Task