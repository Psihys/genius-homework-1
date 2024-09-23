import React, { useState } from 'react'

const ControlledForms = () => {
    const [value, setValue] = useState({
        name: '',
        email: '',
        })
       
    const HandleSubmit = (event) => {
       
        event.preventDefault();
      
    }
    const HandleNameChange = (event) => {
        const name = event.target.value
        setValue((prevState) => ({...prevState, name }));
    }
    const HandleEmailChange = (event) => {
         const email = event.target.value
        setValue((prevState) => ({...prevState, email }));
    }
  return (
      <div>
           <form  onSubmit={HandleSubmit}>
          <label htmlFor='name'>Name</label>
          <input onChange={HandleNameChange} type='text' name='name' id='name'></input>
           <label htmlFor='wmail'>Email</label>
          <input onChange={HandleEmailChange} type='email' name='email' id='email'></input>
          <button type='submit'>Press me</button>
          </form>
          <div>
              <p>Name: {value.name}</p>
              <p>Email: { value.email}</p>
          </div>
    </div>
  )
}

export default ControlledForms
