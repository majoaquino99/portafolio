import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
    return(
        <header>
            <nav className={styles.navbar}>
            <Link className={styles.item} to='/'>HOME</Link>
            <Link className={styles.item} to='/about'>ABOUT</Link>
            <Link className={styles.item} to='/skills'>SKILLS</Link>
            <Link className={styles.item} to='/projects'>PROJECTS</Link>
            <Link className={styles.item} to='/contact'>CONTACT</Link>
            </nav>
        </header>
    )

}

export default Navbar;