// import { useCallback, useState } from 'react';
// import { useMemo } from 'react';
// import { useEffect } from 'react';
import './App.css';
import ChildComponent from './ChildCommponetn';
import SecondChildComponent from './SecondChildComponent';
import { useCounter } from './useCounter';

function App() {
  // const [list, setList] = useState([1, 2, 3, 4, 5])

  // const handleUseCallBack = useCallback(
  //   () => {
  //   setList([...list, 6]);
  //   }, [])
  
  
  // useEffect(() => {
  //   handleUseCallBack();
  //   console.log('render')
  // }, [handleUseCallBack])
  
  // const handleClick = () => {setList([])}

  const { value, increment, decrement } = useCounter();
  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={handleClick}> Click me</button> */}
        {/* <SecondChildComponent/>
      {list.map((item,index) => {
        return <ChildComponent key={index} item={item} />
      })}
      <button onClick={() => setList([...list,6])}>Click me</button> */}
        <p>{value}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </header>
      
    </div>
  );
}

export default App;
