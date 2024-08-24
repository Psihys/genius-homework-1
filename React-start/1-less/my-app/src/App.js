import HelloWorldComponent from './HelloWorldComponent';
import { createElement } from 'react';
import './App.css';
import MyClassComponent from './MyClassComponent';

function App() {
  // const childElement = createElement('div', {className: 'greeting-hello'}, 'Hello again' )
  // const rootElemnt = createElement('h1', {className: 'greeting'}, childElement)
  const hello = "Hello world"
  let number = 1;
  // return rootElemnt
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{hello}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {number === 1 ? <HelloWorldComponent /> : 'Thewre is no component found'}
        {<MyClassComponent/>}
      </header>
    </div>
  );
}

export default App;
