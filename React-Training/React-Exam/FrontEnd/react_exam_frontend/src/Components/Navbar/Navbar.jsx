import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './Navbar.css'
import { useNavigate,NavLink } from 'react-router-dom';
import ViewProfile from '../../Redux/Actions/viewProfile';
import { useDispatch } from 'react-redux';
import isUserLogedIn from '../../Permission/UserLogin';

export default function Navbar() {
    const nevigate=useNavigate()
    const dispatch=useDispatch()

    //LogOut 
    const handleLogOut = () => {
        localStorage.removeItem('token')
        // localStorage.removeItem('logedInUserPermissions')
        nevigate('/login')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand ms-4 navbar-title " href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                {isUserLogedIn() ?  <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                        <li className="nav-item active ms-3 pt-2">
                            <NavLink to="/dashboard" ><span> <DashboardIcon /> Dashboard </span></NavLink>
                        </li>
                        {/* <li className="nav-item ms-3 pt-2">
                            <NavLink to="/blogs" > <DescriptionIcon />Blogs</NavLink>
                        </li>
                        <li className="nav-item ms-3 pt-2">
                            <NavLink to="/allusers" > <PeopleAltIcon />Users</NavLink>
                        </li> */}
                    </ul>:``}

                </div>
               <div className="collapse navbar-collapse justify-content-end">
               {isUserLogedIn() ? <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                        <li className="nav-item active me-4 ">
                            <button className='profile navbtn'
                            onClick={() => { dispatch(ViewProfile()); nevigate('/profile') }}
                            ><PersonIcon /></button>
                        </li>
                        <li className="nav-item active me-4 ">
                            <button className='logout navbtn'
                                onClick={() => { handleLogOut() }}
                            ><LogoutIcon /></button>
                        </li>
                    </ul>:``}
                </div> 

            </nav>



        </>
    )
}
