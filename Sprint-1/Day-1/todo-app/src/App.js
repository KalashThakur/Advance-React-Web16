
import './App.css';
import { TodoInput } from './Component/TodoInput';
import { TodoList } from './Component/TodoList';

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList/>
    </div>
  );
}

export default App;
