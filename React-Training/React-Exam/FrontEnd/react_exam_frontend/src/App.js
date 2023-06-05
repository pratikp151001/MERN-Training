import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/login/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<SignUp text="Sign Up"/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/dashboard' element={<Dashboard/>} ></Route>
        <Route path='/profile' element={<SignUp text="Update Profile"/>} ></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
