import taskReducer from './task-reducer'

const store = {
    _state: {
        tasks: [
            {id: 17856868, message: 'add task', checked: false},
          ]
    },


    dispatch (action) {
        this._state.tasks = taskReducer (this._state.tasks, action)
        this._reranderEntireTree(this._state)
    },
    
    addTask (newTask) {
        let taskItem = {
            id:Math.random(),
            message: newTask,
            checked: false
        }
        this._state.tasks.push(taskItem)
        this._reranderEntireTree()
    },

    removeTask (id) {
        this._state.tasks = this._state.tasks.filter(item => item.id !== id)
        this._reranderEntireTree()
     },

    _reranderEntireTree () {

    },

    subscribe (observer) {
        this._reranderEntireTree = observer
       },

    getState () {
        return this._state
    }   
       

}


export default store