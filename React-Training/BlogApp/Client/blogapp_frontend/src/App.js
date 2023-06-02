import logo from "./logo.svg";
import "./App.css";
import BlogAdd from "./Components/BlogAdd";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./Components/Blogs";
import ViewBlogData from "./Components/ViewBlogData";
import SignUpPage from "./Components/SignUpPage";
import LoginPage from "./Components/LoginPage";
import Users from "./Components/Users";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Profile from "./Components/Profile";
import Editroles from "./Components/Editroles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<BlogAdd text="Add" />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogdata/:id" element={<ViewBlogData />} />
            <Route path="/updateblog/:id" element={<BlogAdd text="Update" />} />
            <Route path="/allusers" element={<Users />} />
            <Route path="/userprofile/:id" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateprofile/:id" element={<SignUpPage  text="Update Profile"/>} />
          </Route>
          <Route path="/signup" element={<SignUpPage  text="Sign Up"/>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Editroles/> */}
    </div>
  );
}

export default App;
