import logo from './logo.svg';
import './App.css';
import Aboutcomponents from './components/Aboutcomponents';
import ContactComponents from './components/ContactComponents';
import HomeComponents from './components/HomeComponents';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<HomeComponents/>}/>
      <Route  path='/about' element={<Aboutcomponents/>}/>
      <Route  path='/contact' element={<ContactComponents/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
