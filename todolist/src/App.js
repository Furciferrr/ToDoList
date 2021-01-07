import './App.css';
import ToDo from './components/todolist';
import state from './components/store'


function App() {

  return (
    <div className="App">
      <ToDo tasks={state.tasks} />
    </div>
  );
}

export default App;
