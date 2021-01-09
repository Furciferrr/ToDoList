import classes from './task.module.css'
import cross from './../img/closeCross.svg'
import { checkedAC, removeTaskAC } from './task-reducer'


const Task = (props) => {
    const removeItem = (e) => {
        const id = e.currentTarget.attributes.id.value
        props.removeTask(removeTaskAC(+id))
    }

    const onCheck = (e) => {
        const id = e.currentTarget.attributes.id.value
        props.removeTask(checkedAC(+id))
    }

    return (
        <div className={`${classes.taskWrap} ${props.checked && classes.checked}`} 
        id={props.id} onClick={(e) => {onCheck(e)}}>
            <div  className={classes.message}>{props.message}</div>
            <div className={classes.imgWrap}>
                <img onClick={ (e) => {
                    removeItem (e)
                } } src={cross} id={props.id} alt='close'/> 
            </div>
        </div>
    )
}

export default Task