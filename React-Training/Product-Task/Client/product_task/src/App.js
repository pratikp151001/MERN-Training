import logo from './logo.svg';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Products from './Components/Products/Products';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import PrOduCts from './Components/Products/PrOduCt';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
     <Route path='/' element={<AddProduct/>}></Route>
     {/* <Route path='/products' element={<Products/>}></Route> */}
     <Route path='/products' element={<PrOduCts/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
