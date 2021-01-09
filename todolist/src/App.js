import './App.css';
import ToDo from './components/todolist';
import store from './components/store'

function App(props) {
  return (
    <div className="App">
      <ToDo tasks={props.state.tasks} 
            addTask={store.dispatch.bind(store)} 
            removeTask={store.dispatch.bind(store)}/>
    </div>
  );
}

export default App;
