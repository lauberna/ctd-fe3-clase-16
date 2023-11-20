import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link to={"/"}><a>Home</a></Link>
        <Link to={"/contacto"}><a>Contacto</a></Link>
    </nav>
  )
}

export default Navbar