import {useState} from 'react'
import './App.css';




const ListComponent = () => {
  const initialValue = [
    { id: 1, name: 'first element' },
    { id: 2, name: 'second element' },
    { id: 3, name: 'third element' },
  ];
  
  const [input, setInput] = useState('');
  const [item, setItem] = useState(initialValue)
  const count = item.length
  
  const ItemComponents = (input) => {
    const UpdateComponents = [...item, {id: item.length + 1, name:input}]
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

const deleteItem = (id) => {
  const updatedItems = item.filter(item => item.id !== id);
  setItem(updatedItems);
};

  return (
    <div className="App">
      <header className="App-header">
        <input onKeyDown={handleKeyDown}  onChange={InputComponent} value={input}></input>
        <p>{count}</p>
        <ul>
           {item.map((element) => (
            <li key={element.id}>{element.name} <br></br> <button onClick={() =>deleteItem(element.id)}>Delete element</button> </li>
           ))}
          
        </ul>
        <button onClick={() => ItemComponents(input)}>Add To Do </button>
      </header>
    </div>
  );
}

export default ListComponent;
