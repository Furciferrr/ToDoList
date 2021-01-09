

const store = {
    _state: {
        tasks: [
            {id: 17856868, message: 'add task'},
          ]
    },

    addTask (newTask) {
        let taskItem = {
            id:Math.random(),
            message: newTask
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