import {useState} from 'react'
import './App.css';




function App() {

  const [input, setInput] = useState('');
  const [item, setItem] = useState([])
  const count = item.length
  const ItemComponents = (input) => {
    const UpdateComponents = [...item, input]
    setItem(UpdateComponents)
    setInput('')
  }

  const InputComponent = (event) => {
    const value = event.target.value
    setInput(value)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      ItemComponents(input);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <input onKeyDown={handleKeyDown}  onChange={InputComponent} value={input}></input>
        <p>{count}</p>
        <ul>
           {item.map((element) => (
            <li key={element}>{element}</li>
          ))}
        </ul>
        <button onClick={() => ItemComponents(input)}>Add To Do </button>
      </header>
    </div>
  );
}

export default App;
