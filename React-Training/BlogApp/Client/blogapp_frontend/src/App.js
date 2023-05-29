import logo from './logo.svg';
import './App.css';
import BlogAdd from './Components/BlogAdd';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Blogs from './Components/Blogs';
import ViewBlogData from './Components/ViewBlogData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<BlogAdd text="Add"/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogdata/:id' element={<ViewBlogData/>} />
        <Route path='/updateblog/:id' element={<BlogAdd text="Update"/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
