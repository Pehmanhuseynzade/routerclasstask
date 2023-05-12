import React from 'react'
import "./index.css"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>
    <header>
     <nav>
          <ul>
               <Link to='/'><li>Drivers</li></Link>
               <Link to='/favorites'><li>Favorites</li></Link>
          </ul>
     </nav>
    </header>
    </>
  )
}

export default Navbar
