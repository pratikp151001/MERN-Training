import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg ">
  

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
       <Link to={"/"}>Calculator</Link>
      </li>
      <li class="nav-item">
      <Link to={"/concatString"}>Concat_String</Link>
      </li>
      
    </ul>
   
  </div>
</nav>
      
    </div>
  )
}
