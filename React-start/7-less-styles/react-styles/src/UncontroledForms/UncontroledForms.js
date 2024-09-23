import React, { useRef } from 'react'

const UncontroledForms = () => {

    const formRef = useRef(null);
    
    const HandleSubmit = (event) => {
        event.preventDefault();
       console.log(formRef)
        console.log(formRef.current.name.value)
        console.log(formRef.current.email.value)


        formRef.current.reset()
    }
    
  return (
      <form ref={formRef}  onSubmit={HandleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name'></input>
           <label htmlFor='wmail'>Email</label>
          <input type='email' name='email' id='email'></input>
          <button type='submit'>Press me</button>
    </form>
  )
}

export default UncontroledForms;