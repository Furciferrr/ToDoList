import './App.css';
import ToDo from './components/todolist';
import store from './components/store'

function App() {
  return (
    <div className="App">
      <ToDo tasks={store.getState().tasks} addTask={store.addTask.bind(store)} removeTask={store.removeTask.bind(store)}/>
    </div>
  );
}

export default App;
