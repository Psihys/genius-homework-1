import React from 'react'
import GrandChildComponents from './GrandChildComponent'

const ToDoList = (props) => {
    console.log(props)

   return( 
  
       <div>
           {props.renderOneToDo}
           <GrandChildComponents newToDo={ props.renderOneToDo} />
       </div>
   )
}

export default ToDoList