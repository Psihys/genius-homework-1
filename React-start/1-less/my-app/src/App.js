import {useState} from 'react'
import './App.css';
// import CounterComponent from './CounterComponents';
import ListComponent from './ListComponent';
import MyClassComponent from './MyClassComponent'


function App() {
  const [isShowTimer,setisShowTimer] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
         {isShowTimer ? <MyClassComponent/> : <ListComponent/>
        //  <CounterComponent/>
        }
        <button onClick={()=> setisShowTimer((prev) =>!prev)} >Show timer</button>
      </header>
    </div>
  );
}

export default App;
