import useState from "react";
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h2>Count is {count}</h2>
      <button onClick={(prev) => prev-1}>Dec</button>
      <button onClick={(prev) => prev+1}>Inc</button>
    </div>
  );
}

export default App;
