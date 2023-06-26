import logo from "./logo.svg";
import "./App.css";
import Stock from "./Components/Stock/Stock";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./Components/Order/Order";

function App() {
  return (
    <>
      <div className="WholePage">
        <BrowserRouter>
          <div className="Sidebar">
            <Sidebar></Sidebar>
          </div>
          <div className="allPages">
            <Routes>
              <Route path="/" element={<Stock />}></Route>
              <Route path="/order" element={<Order />}></Route>
            </Routes>
            {/* <Stock / */}
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
