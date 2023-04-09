import './App.css';
import Squares from './components/Squares';
import Input from './components/Input';
import { useState } from 'react';

function App(props) {

  const [input, setInput] = useState([])
  const [changeColor, setChangeColor] = useState([])

  return (
    <div className="App">
      <Input input={input} setInput={setInput}/>
      <Squares changeColor={changeColor} setChangeColor={setChangeColor}
       />
    </div>
  );
}

export default App;
