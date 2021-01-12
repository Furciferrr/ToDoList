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

const mapDispatchToProps = (dispatch) => {
    return {
        saveTask: (task) => {
            dispatch(addTaskAC(task))
        },

        removeTask: (e) => {
            const id = e.currentTarget.attributes.id.value
            dispatch(removeTaskAC(+id))
        },

        complet: (e) => {
            const id = e.currentTarget.attributes.id.value
            dispatch(completAC(+id))
        },

        viewChecked: () => {
            dispatch(checkedTaskAC())
        },

        viewActive: () => {
            dispatch(showOnlyActiveAC())
        },

        chengeEditMode: () => {
            dispatch(editModeAC())
        },

        setChenges: (id, message) => {
            dispatch(setChengesAC(id, message))
        },

        setEditTaskId: (id) => {
            dispatch (setEditTaskIdAC(id))
        }

    }
}

const TodolistContainer = connect(mapStateToProps, mapDispatchToProps)(ToDo)

export default TodolistContainer