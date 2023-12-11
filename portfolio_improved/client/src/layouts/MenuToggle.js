// MenuToggle.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../Styles/Menu.css'
import workstation from '../static/5243758.png';
import { Link } from 'react-router-dom';
// import "../PDF/UPDATED_Ivan_Angulo_Engineer_1.pdf"

const MenuToggle = () => {
  console.log('MenuToggle component mounted');
  const exitAnimation = { opacity: 0, transition: { duration: 1, delay: 0 } };
  const enterAnimation = { opacity: 1, transition: { duration: 1.5, delay: 2 } };

//   spinning effect function
// const rotateCircle = (nthChild) => {
//     console.log('Initialized rotation');
//     const circleParent = document.querySelector(`.clickable-list li:nth-child(${nthChild})`);
//     const circles = circleParent.querySelectorAll('.circle');
  
//     circles.forEach((circle, index) => {
//       if (index === nthChild - 1) {
//         circle.classList.toggle('rotate');
//         console.log('Finalized rotation');
//       } else {
//         circle.classList.remove('rotate');
//       }
//     });
//   };

const rotateCircle = (id) => {
    console.log('initialized')
    const menuItem = document.querySelector(`.menu-item-index.${id}`);
    console.log(`${id} initialized`)
    menuItem.classList.toggle('rotate');
    console.log(`${id} finalized`)
  };
  
  
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
            <div className="menu pulsate-menu-image">
                <div className={`tesseract-image ${menuOpen ? 'open' : ''}`}>
                    <img src={workstation} alt="Tesseract" />
                </div>
            </div>

            <ul className="clickable-list" >
                <li className="menu-item ">
                    <Link
                        className={`menu-item-index circle about`}
                        onClick={() => rotateCircle('about')}
                        to="/about">
                        About Me
                    </Link>
                </li>

                <li className="menu-item github">
          <Link
            className={`menu-item-index circle github`}
            onClick={() => rotateCircle('github')}
            to="/github-carousel/I-Angelo"
          >
            GitHub Carousel
          </Link>
        </li>
                <li className="menu-item ">
                <a
                    className="menu-item-index circle linkedin"
                    onClick={() => openNewWindow('https://www.linkedin.com/in/ivan-angelo/')}>
                    LinkedIn
                </a>
                </li>

                <li className="menu-item">
                <Link
                        className={`menu-item-index circle certifications`}
                        onClick={() => rotateCircle('certifications')}
                        to="/certifications">
                        Certifications
                    </Link>
                </li>

                <li className="menu-item">
                <Link className={`menu-item-index circle projects`}
                        onClick={() => rotateCircle('projects')}  to="/projects">
                    Projects
                </Link>
                </li>

                <li className="menu-item ">
                <Link className={`menu-item-index circle contact`}
                        onClick={() => rotateCircle('contact')}   to="/contact">
                Contact Me
                </Link>
                </li>
                
                <li className="menu-item ">
                <a
                    className="menu-item-index circle resume"
                    target='_blank'
                    rel='nonreferrer'
                    href='/PDF/UPDATED-Engineer2.pdf' > {/*ALthough we used a more detailed path everywhere else, here we used a relative path */}
                    Resume
                </a>
                </li>
            </ul>
            </nav>
            </motion.div>
        
        );
        };


export default MenuToggle;