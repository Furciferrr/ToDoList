import classes from './task.module.css'
import cross from './../img/closeCross.svg'


const Task = (props) => {

    return (
        <div className={`${classes.taskWrap} ${props.checked && classes.checked}`}
            id={props.id} onClick={(e) => 
            { e.target.className !== classes.edit &&
                props.onCheck(e) }}>
            <div>
                <span className={classes.check}>{props.checked && <span></span>}</span>
                <div className={`${classes.message} ${props.checked && classes.trough}`}>
                    {props.message}</div>
                <span onClick={() => {
                    console.log('edit task')
                }} className={classes.edit}><span>Edit</span></span>    
            </div>
            <div className={classes.imgWrap}>
                <img onClick={(e) => {
                    props.removeTask(e)
                }} src={cross} id={props.id} alt='close' />
            </div>
        </div>
    )
}

export default Task