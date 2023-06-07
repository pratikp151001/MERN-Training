import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpreadSheet from "./Components/SpreadSheet";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import DashboarABC from "./Components/Dashboard/Dashboard123";
import DashboardABC from "./Components/Dashboard/Dashboard123";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp text="Sign Up" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<DashboardABC />}></Route>
            <Route path="/profile" element={<SignUp text="Update Profile" />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      
      {/* <SpreadSheet/> */}
    </div>
  );
}

export default App;
