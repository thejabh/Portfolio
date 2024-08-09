import React,{useState} from 'react';
import styles from './NavBar.module.css';
import { getImageUrl } from '../../utils';

export const NavBar=() => {
    const [menuOpen,setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            {/* Take to the top of the page */}
            <a className={styles.title} href='/' >Portfolio</a> 
            <div className={styles.menu}>
                <img 
                className={styles.menuBtn} 
                src={!menuOpen ? getImageUrl("nav/menuIcon.png"):getImageUrl("nav/closeIcon.png")} 
                alt='menu-button'
                onClick={() => setMenuOpen(!menuOpen)}
                >
                
                </img>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() =>setMenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};