import { useState } from "react"
import React from "react"
import ListItemComponent from "./ListItemComponent"


const ListComponent = () => {
  const initialValue = [
    { id: 1, name: 'first' },
  { id: 2, name: 'second' },
  { id: 3, name: 'third' }
  ];

  const [input, setInput] = useState('')
  const [item, setItem] = useState(initialValue)
  const idNumber = item.length + 1

  const onClickHalder = (input) => {
    const UpdateElement = [...item, { id:idNumber, name: input}]
    setItem(UpdateElement)
    setInput('')
  }
  const onChangeHandler = (event) => {
    const value = event.target.value
    setInput(value)
  }
    return (
    <React.Fragment>
        <input onChange={onChangeHandler} value={input} ></input>
        <ul>
          {item.map((element) => (
            <ListItemComponent key={element.id} id={element.id}  name={element.name}  />
                ))}
        </ul>
        <button  onClick={()=> onClickHalder(input)}>Add new element</button>
    </React.Fragment>
    )
}

export default ListComponent;