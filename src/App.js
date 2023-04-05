import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Number from './components/Number';
import List from './components/List';

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <h1>Čítač</h1>
      <Number number={number} />
      <Button isUp={false} number={number} setNumber={setNumber} />
      <Button isUp={true} number={number} setNumber={setNumber} />

      <h1>Pivo</h1>
      <List />
    </div>
  );
}

export default App;
