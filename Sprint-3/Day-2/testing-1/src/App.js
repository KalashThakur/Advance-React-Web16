import './App.css';
import { Button } from './Components/Button';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="App">
      <h3>Current Theme is {theme}</h3>
      <Button onClick={() => {setTheme(theme === "light" ? "dark" : "light")}}> Change Theme </Button>
    </div>
  );
}

export default App;
