import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark justify-content-center">
            
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 " >
                        <li class="nav-item active ms-3">
                        <Link to={"/"}><i class="bi bi-stickies-fill ms-2"></i>Posts</Link>
                        </li>
                        <li class="nav-item active ms-3">
                        <Link to={"/users"}><i class="bi bi-people-fill ms-2"></i>Users</Link>
                        </li>
                        <li class="nav-item active ms-3">
                        <Link to={"/comments"}> <i class="bi bi-chat-text-fill ms-4"></i>Comments</Link>
                        </li>
                        <li class="nav-item active ms-3">
                        <Link to={"/todos"}> <i class="bi bi-list-task ms-2"></i>Todos</Link>
                        </li>
                        <li class="nav-item active ms-3">
                        <Link to={"/album"}> <i class="bi bi-journal-album ms-3"></i><span>Album</span> </Link>
                        </li>
                        
                    </ul>
                    
                </div>
            </nav>

        </>
    )
}
