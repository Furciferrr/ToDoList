import { addTaskAC, checkedTaskAC, removeTaskAC, editModeAC, setChengesAC, setEditTaskIdAC, completAC, showOnlyActiveAC } from './task-reducer'
import {connect} from 'react-redux'
import ToDo from './todolist'



const mapStateToProps = (state) => {
    return {
        tasks: state.taskPage.tasks,
        showOnlychecked: state.taskPage.showOnlychecked,
        editMode: state.taskPage.editModeInfo.editMode,
        idEditTask: state.taskPage.editModeInfo.idEditTask,
        showOnlyActive: state.taskPage.showOnlyActive
    }
}


const TodolistContainer = connect(mapStateToProps, { addTaskAC, checkedTaskAC, removeTaskAC, editModeAC, 
    setChengesAC, setEditTaskIdAC, completAC, showOnlyActiveAC })(ToDo)

export default TodolistContainer