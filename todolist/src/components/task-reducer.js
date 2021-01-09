const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const CHECKED = 'CHECKED'

const taskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            let taskItem = {
                id:Math.random(),
                message: action.newTask,
                checked: false
            }
            state.push(taskItem)
            return state
            case REMOVE_TASK:
                state = state.filter(item => item.id !== action.id)
                return state
            case CHECKED:
                 state = state.map(task => {
                    if(task.id === action.id) {
                        if(task.checked) {
                            task.checked = false
                        } else {
                            task.checked = true
                        }
                        
                 }
                 return task
                })
                 return state    
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


export default taskReducer