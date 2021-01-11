const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const CHECKED = 'CHECKED'
const CHECKED_TASK = 'CHECKED_TASK'

let initialState = {

   tasks: [ {id: 17856868, message: 'add task', checked: false } ],
   showOnlychecked: false
}




const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let taskItem = {
                id:Math.random(),
                message: action.newTask,
                checked: false
            }
            return {
                ...state,
                tasks: [...state.tasks, taskItem]
            }
            /* stateCopy.tasks.push(taskItem)
            return stateCopy */
            case REMOVE_TASK:
                return {
                    ...state,
                    tasks: state.tasks.filter(item => item.id !== action.id)
                }
            case CHECKED:
                return {
                    ...state,
                    tasks: state.tasks.map(task => {
                        if(task.id === action.id) {
                            if(task.checked) {
                                return {
                                    ...task,
                                    checked: false
                                }
                            } else {
                                return {
                                    ...task,
                                    checked: true
                                }
                            }
                        }
                        return task
                    })
                }
            case CHECKED_TASK:
                return {
                    ...state,
                    showOnlychecked: state.showOnlychecked ? false : true
                    }       
            default:
                return state;
    }
}

export const addTaskAC = (newTask) => {
    return {
        type: ADD_TASK,
        newTask
    }
}

export const removeTaskAC = (id) => {
    return {
        type: REMOVE_TASK,
        id
    }
}

export const checkedAC = (id) => {
    return {
        type: CHECKED,
        id
    }
}

export const checkedTaskAC = () => {
    return {
        type: CHECKED_TASK
    }
}

export default taskReducer