import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import PostAddIcon from '@mui/icons-material/PostAdd';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import PERMISSIONS from '../Permissions/permission';
import PermissionCheck from '../Permissions/PermissionCheck'
import { useDispatch, useSelector } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import OwnProfile from '../Redux/Actions/UserOwnProfile';
import isUserLogedIn from '../Permissions/UserLogedIn';

// console.log("QQQQQQQQQQQQQQWWWWWWWWWWWWWWWWWWWWWWWWWAaaaaaaaaaaaaaaaaa",PermissionCheck(PERMISSIONS.CREATE_USER_PERMISSION))


export default function Navbar() {
    

    // const token=localStorage.getItem('token')


    // console.log("🚀 ~ file: Navbar.jsx:12 ~ Navbar ~ token:", token)

    const dispatch=useDispatch()
    const state = useSelector((state) => state.user)
    console.log("🚀 ~ file: Navbar.jsx:21 ~ Navbar ~ state:", state)
    const nevigate = useNavigate()

    const handleLogOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('logedInUserPermissions')
        nevigate('/login')
    }
    // useEffect(() => {
    //     // alert("Component Re-Render")
    //     let token = JSON.parse(localStorage.getItem('logedInUserPermissions'))

    // }, [state?.signup_data?.data, state?.login_data?.data])



    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand ms-4 " href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                  {isUserLogedIn() ? <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                        <li className="nav-item active ms-3 pt-2">
                            <NavLink to="/" ><span> <PostAddIcon /> Add Blogs</span></NavLink>
                        </li>
                        <li className="nav-item ms-3 pt-2">
                            <NavLink to="/blogs" > <DescriptionIcon />Blogs</NavLink>
                        </li>
                        <li className="nav-item ms-3 pt-2">
                            <NavLink to="/allusers" > <PeopleAltIcon />Users</NavLink>
                        </li>
                    </ul>:``}

                </div>
                <div className="collapse navbar-collapse justify-content-end">
                {isUserLogedIn() ?<ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                        <li className="nav-item active me-4 ">
                           <button className='profile' onClick={()=>{dispatch(OwnProfile());nevigate('/profile')}} ><PersonIcon /></button> 
                        </li>
                        <li className="nav-item active me-4 ">
                            <button className='logout' onClick={() => { handleLogOut() }}><LogoutIcon /></button>
                        </li>
                    </ul>:``}
                </div>

            </nav>

        </>
    )
}
