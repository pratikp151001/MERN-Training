import logo from './logo.svg';
import './App.css';
import Posts from './components/posts';
import Navbar from './components/Navbar';
import Users from './components/users';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Comments from './components/comments';
import Todos from './components/todos';
import Albums from './components/albums';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Posts/>}/>
        <Route path='/users' element={<Users/>} />
        <Route path='/comments' element={<Comments/>}/>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/album' element={<Albums/>}/>

      </Routes>
      
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
