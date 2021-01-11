import { addTaskAC, checkedAC, checkedTaskAC, removeTaskAC } from './task-reducer'
import {connect} from 'react-redux'
import ToDo from './todolist'



const mapStateToProps = (state) => {
    return {
        tasks: state.taskPage.tasks,
        showOnlychecked: state.taskPage.showOnlychecked
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

        onCheck: (e) => {
            const id = e.currentTarget.attributes.id.value
            dispatch(checkedAC(+id))
        },

        viewChecked: () => {
            dispatch(checkedTaskAC())
        }

    }
}

const TodolistContainer = connect(mapStateToProps, mapDispatchToProps)(ToDo)

export default TodolistContainer