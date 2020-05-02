import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <header>
            <nav className="navbar">
            <Link className='item' to='/'>HOME</Link>
            <Link className='item' to='/about'>ABOUT</Link>
            <Link className='item' to='/skills'>SKILLS</Link>
            <Link className='item' to='/projects'>PROJECTS</Link>
            <Link className='item' to='/contact'>CONTACT</Link>
            </nav>
        </header>
    )

}

export default Navbar;