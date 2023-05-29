import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
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
                            <NavLink to="/" >Add Blogs</NavLink>
                        </li>
                        <li className="nav-item ms-3 pt-2">
                            <NavLink to="/blogs" >Blogs</NavLink>
                        </li>
                        {/* <li className="nav-item ms-3 pt-2">
                            <a className="nav-link" href="#"><b> UseREf</b></a>
                        </li> */}
                    </ul>

                </div>
            </nav>

        </>
    )
}
