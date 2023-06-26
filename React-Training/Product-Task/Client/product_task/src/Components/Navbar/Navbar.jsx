import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Navbar/Navbar.css'

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
                            <NavLink to="/" ><span>Add Product</span></NavLink>
                        </li>
                        <li className="nav-item ms-3 pt-2">
                            <NavLink to="/products" > Products</NavLink>
                        </li>
                        
                    </ul> 

                </div>
                

            </nav>

        </>
    )
}
