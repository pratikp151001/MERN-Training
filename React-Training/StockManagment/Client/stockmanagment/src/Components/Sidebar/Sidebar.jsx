import React from 'react'
import "../Sidebar/Sidebar.css"
import { NavLink, useNavigate } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <ul className="sidebar">
                {/* <li><span><i className="fa fa-shopping-cart"></i></span><span></span></li> */}
                <li><NavLink to="/"> Stocks</NavLink></li>
                <li><NavLink to="/order"> Order</NavLink></li>

            </ul>
        </>
    )
}
