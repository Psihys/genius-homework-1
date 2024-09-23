import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './Layout/Layout';
import SingleContact from './pages/SingleContact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <main>
        <Routes>
          <Route path='' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/Contacts' element={<Contacts/>}/>
            <Route path='/Contacts/:id' element={<SingleContact/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>
          
        </Routes>
      </main>
    </div>
  );
}

export default App;
