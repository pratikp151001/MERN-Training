import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import PostAddIcon from '@mui/icons-material/PostAdd';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Navbar() {

    const token=localStorage.getItem('token')


    console.log("🚀 ~ file: Navbar.jsx:12 ~ Navbar ~ token:", token)
    const nevigate=useNavigate()

    const handleLogOut=()=>{
        localStorage.removeItem('token')
        nevigate('/login')
    } 
    return (
        <>
        
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand ms-4 " href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                        <li className="nav-item active ms-3 pt-2">
                            <NavLink to="/" ><span> <PostAddIcon /> Add Blogs</span></NavLink>
                        </li>
                        <li className="nav-item ms-3 pt-2">
                            <NavLink to="/blogs" > <DescriptionIcon />Blogs</NavLink>
                        </li>
                        <li className="nav-item ms-3 pt-2">
                            <NavLink to="/allusers" > <PeopleAltIcon />Users</NavLink>
                        </li>
                    </ul>

                </div>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                        <li className="nav-item active me-4 ">
                            <button className='logout' onClick={()=>{handleLogOut()}}><LogoutIcon/></button>
                        </li>
                    </ul>
                </div>

            </nav>

        </>
    )
}
