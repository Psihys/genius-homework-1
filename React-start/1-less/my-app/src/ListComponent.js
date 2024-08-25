import { useState } from "react"
import React from "react"
import ListItemComponent from "./ListItemComponent"


const ListComponent = () => {
const [input, setInput] = useState('')
  const [item, setItem] = useState(['First element'])
  

  const onClickHalder = (input) => {
    const UpdateElement = [...item,input]
    setItem(UpdateElement)
    setInput('')
  }
  const onChangeHandler = (event) => {
    const value = event.target.value;
    setInput(value)
  }
    return (
    <React.Fragment>
        <input onChange={onChangeHandler} value={input} ></input>
        <ul>
                {item.map((element, index) => (
                    <ListItemComponent  element={element} index={index} />
                ))};
        </ul>
        <button  onClick={()=> onClickHalder(input)}>Add new element</button>
    </React.Fragment>
    )
}

export default ListComponent;