import { useState,useReducer,useEffect, useRef, useLayoutEffect } from 'react';

import './App.css';
// import CounterComponent from './CounterComponents';
// import ListComponent from './ListComponent';
// import MyClassComponent from './MyClassComponent'


function App() {

  const headerRef = useRef()
  console.log(headerRef)

  const currenFocus = () => {
    headerRef.current.focus();
    const text = JSON.stringify(headerRef.current.value)
    console.log(headerRef)
    console.log(text)
  }
  // const reducer = (state,action ) => {
  //   if (action.type === 'increment') {
  //     return {count: state.count + 1};
  //   }
  //   if (action.type === 'decrement') {
  //     return {count: state.count - 1};
  //   }
  //   if (action.type === 'reset') {
  //     return {count: state.count = 0};
  //   }
  // } 
  
  // const HandleClick = (type) => {
  //   dispatch(type)
  // }
  // const [state, dispatch] = useReducer(reducer, {count : 0});
  // const [isShowTimer, setisShowTimer] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
         {/* {isShowTimer ? <MyClassComponent/> : <ListComponent/>
        //  <CounterComponent/>
        }
        <button onClick={() => setisShowTimer((prev) => !prev)} >Show timer</button>
         */}
        {/* <p>{state.count}</p>
        <button onClick={() => HandleClick({ type: 'increment' })}>Click to add</button>
        <button onClick={() => HandleClick({ type: 'decrement' })}>Click to reduse </button>
         <button onClick={() => HandleClick({type: 'reset'})}>Click to reset </button> */}
        <input ref={headerRef} />
        <p>Text</p>
        <button onClick={currenFocus}>Click me to focus </button>
        
      </header>
    </div>
  );
}

export default App;
