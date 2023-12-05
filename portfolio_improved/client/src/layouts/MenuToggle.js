// MenuToggle.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../Styles/Menu.css'
import tesseractImage from '../static/Tesseract-1Kb.gif';
import { Link } from 'react-router-dom';
// import "../PDF/UPDATED_Ivan_Angulo_Engineer_1.pdf"

const MenuToggle = () => {
  console.log('MenuToggle component mounted');
  const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0 } };
  const enterAnimation = { opacity: 1, transition: { duration: 1.5, delay: 2 } };


    const [menuOpen, setMenuOpen] = useState(false);
  
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const openNewWindow = (url) => {
      // Open a new window or tab with the specified URL
      window.open(url, '_blank');
    };

return (

    <motion.div className="menu-mobile" initial={exitAnimation} animate={enterAnimation} exit={exitAnimation}>
        <nav className={`menu ${menuOpen ? 'open' : ''} menu2`}>
            <input
                type="checkbox"
                id="menu-toggler"
                className="menu-toggler"
                checked={menuOpen}
                onChange={toggleMenu}
            />
            <div className="menu">
            <div className={`tesseract-image ${menuOpen ? 'open' : ''}`}>
                <img src={tesseractImage} alt="Tesseract" />
            </div>
            </div>
            <ul>
                <li className="menu-item ">
                <Link className="menu-item-index " to="/about">
                About Me
                </Link>
                </li>
                <li className="menu-item">
                {/* Use Link component to navigate to /github-carousel route */}
                <Link className="menu-item-index" to="/github-carousel/I-Angelo">
                    GitHub Carousel
                </Link>
                </li>
                <li className="menu-item ">
                <a
                    className="menu-item-index "
                    onClick={() => openNewWindow('https://www.linkedin.com/in/ivan-angelo/')}>
                    LinkedIn
                </a>
                </li>
                <li className="menu-item">
                {/* Use Link component to navigate to /github-carousel route */}
                <Link className="menu-item-index " to="/certifications">
                    Certifications
                </Link>
                </li>
                <li className="menu-item">
                {/* Use Link component to navigate to /github-carousel route */}
                <Link className="menu-item-index " to="/projects">
                    Projects
                </Link>
                </li>
                <li className="menu-item ">
                <Link className="menu-item-index " to="/contact">
                Contact Me
                </Link>
                </li>
                <li className="menu-item ">
                <a
                    className="menu-item-index "
                    target='_blank'
                    rel='nonreferrer'
                    href='/PDF/UPDATED_Ivan_Angulo_Engineer_1.pdf' > {/*ALthough we used a more detailed path everywhere else, here we used a relative path */}
                    Resume
                </a>
                </li>
            </ul>
            </nav>
            </motion.div>
        
        );
        };


export default MenuToggle;