import logo from './logo.svg';
import './App.css';
import Calulator from './Componnets/Calulator';
import ContactString from './Componnets/ContactString';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Navbar from './Componnets/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Calulator/>}/>
        <Route path="/concatString" element={<ContactString/>}/>
      </Routes>
      {/* <Calulator/>
      <ContactString/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
