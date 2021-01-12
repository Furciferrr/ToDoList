const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const COMPLET_TASK = 'COMPLET_TASK'
const CHECKED_TASK = 'CHECKED_TASK'
const EDIT_MODE = 'EDIT_MODE'
const SET_CHENGES = 'SET_CHENGES'
const SET_EDIT_TASK_ID = 'SET_EDIT_TASK_ID'
const ONLY_ACTIVE_MODE = 'ONLY_ACTIVE_MODE'

let initialState = {

   tasks: [ {id: 17856868, message: 'add task', checked: false, } ],
   showOnlychecked: false,
   showOnlyActive: false,
   editModeInfo: {editMode: false, idEditTask: 0}
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
            case COMPLET_TASK:
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
            case ONLY_ACTIVE_MODE:
                    return {
                    ...state,
                    showOnlyActive: state.showOnlyActive ? false : true
                            }          
            case EDIT_MODE:
                return {
                    ...state,
                    editModeInfo: {...state.editModeInfo, 
                    editMode: state.editModeInfo.editMode ? false : true}
                            }
            case SET_EDIT_TASK_ID:
                return {
                    ...state,
                    editModeInfo: {...state.editModeInfo, 
                        idEditTask: action.id}
                         }                  
            case SET_CHENGES:
                return {
                    ...state,
                    tasks: state.tasks.map(task => {
                        if(task.id === state.editModeInfo.idEditTask) {
                                return {
                                    ...task,
                                    message: action.message
                                }
                            }
                            return task
                        }) 
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

export const completAC = (id) => {
    return {
        type: COMPLET_TASK,
        id
    }
}

export const checkedTaskAC = () => {
    return {
        type: CHECKED_TASK
    }
}

export const showOnlyActiveAC = () => {
    return {
        type: ONLY_ACTIVE_MODE
    }
}

export const editModeAC = () => {
    return {
        type: EDIT_MODE
    }
}

export const setChengesAC = (message) => {
    return {
        type: SET_CHENGES,
        message
    }
}

export const setEditTaskIdAC = (id) => {
    return {
        type: SET_EDIT_TASK_ID,
        id
    }
}

export default taskReducer