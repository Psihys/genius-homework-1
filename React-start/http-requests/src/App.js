
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useFetch } from './hooks/useFetch';
import { Routes } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:3030/'

function App() {

const { data: contacts, isLoading, error } = useFetch('http://localhost:3030/contacts')
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(contacts)
  }, [contacts])
  

  const AddContact = async () => {
    const payload = {
      "name": "John Doe",
      "email": "john@example.com"
    };
    const response = await axios.post('contacts', payload)
    console.log(response)
    setData(prev => [...prev,response.data])
}

  const DeleteContact = async(id) => {
     await axios.delete(`contacts/${id}`)
     setData(prev => [...prev.filter(item =>item.id !== id)])
  }

  if (error) {
    return <div>Something went wrong {error} { ' '}</div>
  }

  console.log(contacts)
  return (
    <div className="App">
      <header className="App-header">
        <p>Contacts</p>
          <main>
        <ul>
          {isLoading ? <div>Loading....</div> : data.map(contact =>
          (<li key={contact.id}>
            {contact.name}{' '}{contact.email}
          <button onClick={() => DeleteContact(contact.id)}>Delete</button>
          </li>))}
          </ul>
          <button onClick={AddContact}>Add</button>
          _
      </main>
      </header>
    
    </div>
  );
}

export default App;
