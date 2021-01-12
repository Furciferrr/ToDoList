import classes from './task.module.css'
import cross from './../img/closeCross.svg'
import pencil from './../img/pencil.svg'


const Task = (props) => {

    return (
        <div className={`${classes.taskWrap} ${props.checked && classes.checked}`}
            id={props.id} onClick={(e) => 
            { e.target.className !== classes.editTarget &&
                props.complet(e) }}>
            <div>
                <span className={classes.check}>{props.checked && <span></span>}</span>
                <div className={`${classes.message} ${props.checked && classes.trough}`}>
                    {props.message}</div>
                <span className={classes.edit} onClick={(e) => {
                    props.onEditMode(e)
                }}  id={props.id}><img src={pencil} alt='pencil' className={classes.editTarget}></img></span>    
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